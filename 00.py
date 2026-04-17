import requests
import json


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "env": "undefined",
    "origin": "https://xiaopeng.jobs.feishu.cn",
    "portal-channel": "saas-career",
    "portal-platform": "pc",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://xiaopeng.jobs.feishu.cn/index/position/list?keywords=&category=&location=&project=&type=&job_hot_flag=&current=4&limit=10&functionCategory=&tag=",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0",
    "website-path": "index",
    "x-csrf-token": "DbSOG_hZMvt5MvoToYtbeyvtJ2a3ywx1gFZucUZ0fFc="
}
cookies = {
    "passport_web_did": "7592147515915455427",
    "passport_trace_id": "7592147515936377800",
    "QXV0aHpDb250ZXh0": "5a21cf78eda24a4aa1ebfff084d65afe",
    "lang": "zh",
    "i18n_locale": "zh",
    "__tea__ug__uid": "8944641767684594657",
    "locale": "zh-CN",
    "landing_url": "https://www.feishu.cn/download",
    "Hm_lvt_a79616d9322d81f12a92402ac6ae32ea": "1773104901",
    "_gcl_au": "1.1.218566607.1773104901",
    "_uetvid": "a158f6301c1d11f1a9513f059559e13a",
    "_ga": "GA1.2.2122390954.1773104901",
    "_ga_VPYRHN104D": "GS2.1.s1773104901$o1$g1$t1773105236$j60$l0$h0",
    "session": "U7CK1RF-2fdu0b1a-ae53-4fa5-afa2-6757333c598a-NN5W4",
    "is_anonymous_session": "1",
    "_csrf_token": "d2d0c0f939991e11f3833d7249907b773ae86c96-1773995368",
    "channel": "saas-career",
    "platform": "pc",
    "s_v_web_id": "mo27r2zv_anv9mdDZ_dhUr_4ce1_8kh1_OTnsz3gGxllI",
    "device-id": "7629529859253569034",
    "atsx-csrf-token": "DbSOG_hZMvt5MvoToYtbeyvtJ2a3ywx1gFZucUZ0fFc%3D"
}
url = "https://xiaopeng.jobs.feishu.cn/api/v1/search/job/posts"
params = {
    "keyword": "",
    "limit": "10",
    "offset": "30",
    "job_category_id_list": "",
    "tag_id_list": "",
    "location_code_list": "",
    "subject_id_list": "",
    "recruitment_id_list": "",
    "portal_type": "6",
    "job_function_id_list": "",
    "storefront_id_list": "",
    "portal_entrance": "1",
    "_signature": "uUbgagAAAACa1b3njJFZfLlG4HAANCz"
}
data = {
    "keyword": "",
    "limit": 10,
    "offset": 30,
    "job_category_id_list": [],
    "tag_id_list": [],
    "location_code_list": [],
    "subject_id_list": [],
    "recruitment_id_list": [],
    "portal_type": 6,
    "job_function_id_list": [],
    "storefront_id_list": [],
    "portal_entrance": 1
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)