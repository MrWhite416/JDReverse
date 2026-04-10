# development time: 2025-10-23  16:59
# developer: 元英
import datetime
import json

from wechat import WeChat
import threading
from filter.car_about_system import is_car_related
from utils import city_mapping, parse_moment_text, parse_moment_image, post_new_moments, temp_imgs_folder, \
    post_all_moments, avatar_b64
from datetime import datetime
from typing import List, Optional
from apscheduler.schedulers.background import BackgroundScheduler
from db.crud import Crud
from logg import logger


class Moments(object):

    def __init__(self, wc: WeChat):
        self.wc = wc

    def all_moments(self):
        friends = self.get_friends()
        for wxid, nickname, city, avatar_base64 in friends:
            logger.info(f"id:{wxid},昵称：{nickname},城市：{city}")
            friend_moments = list(self.moments(nickname, wxid))
            yield {"nickname": nickname, "city": city, "wx_id": wxid, "avatar": avatar_base64,
                   "moments": friend_moments}

    def get_friends(self):
        friends = self.wc.get_contacts(client_id=1)

        if not friends:
            return []

        for friend in friends:
            wxid = friend.get("wxid")

            nickname = friend.get("nickname")
            city_e = friend.get("city")
            avatar_url = friend.get("avatar")

            city = city_mapping(city_e)
            avatar_base64 = avatar_b64(avatar_url)
            yield (wxid, nickname, city, avatar_base64)

    def moments(self, nickname: str, wxid: str, max_id="0"):
        moments = None
        for _ in range(3):
            moments = self.wc.get_friend_moments(client_id=1, username=wxid, max_id=max_id)
            if not moments:
                logger.info(f"{wxid}的用户朋友圈获取时为空！！！重试中...")
                continue
            else:
                break
        if moments is None:
            logger.warning(f"已重试三次，{wxid}的用户朋友圈获取时为空！！！请调试一下下")
            return []

        moments_list = moments["objectList"]
        if not moments_list:
            logger.info(f"{nickname} 朋友圈无可视内容 {moments['retTips']}")
            return []

        for moment in moments_list:
            moment_id = moment["id"]
            ct_time = moment["createTime"]
            publish_time = str(datetime.fromtimestamp(ct_time))

            moment_b64 = moment["objectDesc"]["buffer"]

            moment_content = parse_moment_text(moment_b64)

            # 判断是否与汽车相关
            if not is_car_related(moment_content):
                logger.info(f"{nickname}朋友圈文本：{moment_content}。不是汽车相关")
                continue

            moment_images = parse_moment_image(moment_b64, self.wc)

            logger.info(f"【{nickname}】的朋友圈：文本内容【{moment_content}】，朋友圈图片有【{len(moment_images)}】张")
            # 20年奥迪A6L，45高功率下架🎉，东北老铁36期带走，㊗️老铁用车愉快，愿四环星辉照耀你的事业与前程，愿世间美好与你环环相扣
            yield {"moment_id": moment_id, "publish_time": publish_time, "text": moment_content, "imgs": moment_images}


class MomentPoller:
    def __init__(self, wc: WeChat, interval_second: int = 120):
        """
        朋友圈轮询器
        :param interval: 轮询间隔（分钟），默认5分钟
        """
        self.interval_second = interval_second
        self.cr = Crud()
        self.scheduler = None
        self.wc = wc
        self.scheduled_task = None
        self.thread_event = threading.Event()

    def _get_existing_moment_ids(self, user_id: Optional[str] = None) -> set:
        """获取数据库中已存在的朋友圈ID（用于去重）"""
        moments = self.cr.query_moments(user_id)
        return {moment.moment_id for moment in moments if moment.moment_id}

    def _is_new_moment(self, moment_data: dict, existing_ids: set) -> bool:
        """判断单条朋友圈是否为新内容"""
        return moment_data.get("moment_id") not in existing_ids

    def _sync_new_moments(self, new_moments: List[dict]) -> int:
        """将新朋友圈同步到数据库 以及 并post给服务端"""

        added_count = 0
        for moment in new_moments:
            try:
                user_id = moment["username"]
                user_data = self.wc.get_contact(client_id=1, wxid=user_id)

                moment_id = moment["id"]
                nickname = user_data["nickname"]

                city = city_mapping(user_data["city"])
                avatar_url = user_data.get("avatar")

                avatar_base64 = avatar_b64(avatar_url)
                moment_b64 = moment["objectDesc"]["buffer"]
                moment_content = parse_moment_text(moment_b64)
                # 判断是否与汽车相关
                if not is_car_related(moment_content):
                    logger.info(f"{nickname}朋友圈文本：{moment_content}。不是汽车相关")
                    continue
                ims = parse_moment_image(moment_b64, self.wc)

                ct_time = moment["createTime"]
                publish_time = str(datetime.fromtimestamp(ct_time))
                post_new_moments(user_id, nickname, moment_id, city, moment_content, publish_time, ims, avatar_base64)
                self.cr.add_moment(user_id, nickname, moment_id, city, moment_content, publish_time, ims, avatar_base64)
                added_count += 1

            except Exception as e:
                logger.error(f"同步单条朋友圈失败：【{str(e)}】，错误行号【{e.__traceback__.tb_lineno}】")

        return added_count

    def poll_once(self) -> int:
        """执行一次轮询并返回新增数量"""
        try:
            logger.info(f"[{datetime.now()}] 开始轮询朋友圈...")

            api_moments = self.wc.get_moments(client_id=1)
            if not api_moments:
                logger.error("好像断连了")
            api_moments = api_moments["objectList"]
            if not api_moments:
                return 0

            # 按用户分组获取已有ID
            user_ids = {m["username"] for m in api_moments}
            existing_ids = set()
            for user_id in user_ids:
                existing_ids.update(self._get_existing_moment_ids(user_id))

            # 筛选新朋友圈
            new_moments = [m for m in api_moments if self._is_new_moment(m, existing_ids)]
            if not new_moments:
                logger.info(f"未发现新朋友圈~")
                return 0

            # 同步新数据到数据库
            with temp_imgs_folder() as imgs_dir:
                added = self._sync_new_moments(new_moments)
            logger.info(f"轮询完成：新增{added}条朋友圈，总处理{len(api_moments)}条")
            return added

        except Exception as e:
            logger.error(f"轮询出错：【{str(e)}】，行号【{e.__traceback__.tb_lineno}】")
            self.cr.close()
            return 0

    def start(self):
        """启动轮询任务"""

        def box_task():
            obj = MomentPoller(self.wc, self.interval_second)
            obj.poll_once()

        # self.poll_once()

        box_task()
        self.scheduler = BackgroundScheduler()

        self.scheduler.add_job(
            func=box_task,
            trigger='interval',
            seconds=self.interval_second,
            id='sync_moments',

            max_instances=2,
            coalesce=False,
            misfire_grace_time=3,
        )

        self.scheduler.start()

        self.thread_event.wait()

    def stop(self):

        if self.scheduler:
            self.scheduler.shutdown(wait=True)
            logger.info("轮询已关闭")
        self.thread_event.set()


def first_sync(wc: WeChat, cu: Crud):
    mm = Moments(wc)

    all_moments = []

    all_user_moments = mm.all_moments()

    for user_moments in all_user_moments:
        wx_id = user_moments["wx_id"]
        nickname = user_moments["nickname"]
        city = user_moments["city"]
        avatar = user_moments["avatar"]
        all_moments.extend(
            [{"wx_id": wx_id, "nickname": nickname, "city": city, "avatar": avatar, **moment_data} for moment_data in
             user_moments["moments"]])
    if not all_moments:
        logger.info("所有朋友圈为空")
    post_all_moments(all_moments)

    # 批量插入数据
    cu.add_moments_batch(all_moments)



