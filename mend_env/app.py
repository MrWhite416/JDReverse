# import requests_go as requests
import json

from curl_cffi import requests
import execjs
import pyquery

with open("./code.js","r",encoding="utf8") as f:
    code = f.read()

compiler = execjs.compile(code)



search_word = "小米手环10nfc版"




headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "origin": "https://search.jd.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://search.jd.com/Search?keyword=%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF10nfc%E7%89%88&enc=utf-8&pvid=bfd2a3a1e66a47ad803a1a4c8dd13684&themeColor=&from=home&spmTag=YTAyMTkuYjAwMjM1Ni5jMDAwMDcyMTAuc2VhcmNoX2J1dHRvbg",
    "sec-ch-ua": "\"Chromium\";v=\"146\", \"Not-A.Brand\";v=\"24\", \"Microsoft Edge\";v=\"146\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0",
    "x-referer-page": "https://search.jd.com/Search",
    "x-rp-client": "h5_1.0.0"
}
cookies = {
    "__jdu": "17739964898291387156454",
    "shshshfpa": "b0a0e91e-7f5d-b929-de9a-d85f8202759c-1773996497",
    "shshshfpx": "b0a0e91e-7f5d-b929-de9a-d85f8202759c-1773996497",
    "jcap_dvzw_fp": "DZEifqaLYnaFikGdVuke8l4g0OIcRtwTAtwj_m1AN-kIISKj_e37gYUR_0Pl844k5Uga3EnvEwGcVbdr7_y2B3QTDdQ=",
    "PCSYCityID": "CN_510000_510100_0",
    "__jdv": "143920055|direct|-|none|-|1775524336438",
    "autoOpenApp_downCloseDate_autoOpenApp_handler": "1775631955493_1",
    "mail_times": "4%2C1%2C1775631963806",
    "umc_count": "2",
    "TrackID": "1UlfG6gIvJ9NsyRK-db6TvKl_atBKKcG0NVr5zx-Po_OxsF1TYgAUyfR2mQUUcXwmDRpl1vR44i8uZ3aY5C3tbpqHUbGFuA1S8fJ1DeZ1gq7LIW01JLk1owruhYLedh85",
    "thor": "6453431D6FBCAE320E947368AADC890261863AA51C602E740F085B976E362E5333C06DF00925A15A6746826867495BB9A798A5ED8ACB21FE8D69E4B8BAD496B89140D58127CCF7E9FFE1187ADE993B7BF1CFC2A27FD55ED43E03EE20BB23B43FCB1415554404D5F550BAA98900BBF0B87BB89B2E26B46593A9742006DA664DEA6F0A4D35701F3D0D7D02E534435E5451D5BDA79AE3451A2300A1198647E56956",
    "light_key": "AASBKE7rOxgWQziEhC_QY6yadDho6S7mlcBHTrut1VvNLErpreMsFG6VohSQqi5_fAmZZn6e",
    "pinId": "gpMst0gd-66yJGasfhFA1g",
    "pin": "jd_bquvIsIpMFCE",
    "unick": "17806fvr115z85",
    "ceshi3.com": "000",
    "_tp": "eWL7I5MTq4aVj5DNm7JsQA%3D%3D",
    "_pst": "jd_bquvIsIpMFCE",
    "3AB9D23F7A4B3CSS": "jdd03ZNO3LCOVIT62OJGR46MK4IXZAMFH4F44GALK55OX2DU4TSQAUOZKUFCRSQJC47LCZQ5DHT4G47EWXSJXU6WADOBQSUAAAAM5NP7TZZYAAAAACHSXIN3PM7OCK4X",
    "wlfstk_smdl": "h3qzynp7bq9v9mf3d0afr1ydiqr45gbm",
    "cn": "1",
    "areaId": "22",
    "__jda": "143920055.17739964898291387156454.1773996490.1775626813.1775631617.14",
    "__jdc": "143920055",
    "__jdb": "143920055.43.17739964898291387156454|14.1775631617",
    "flash": "3_nMi6Ig3ubTdf9AktQ0vjHAvwRJPtllzHdAVA_3CGXbaYHnf2gmuw7_qZDhwm2tmCG5LoLEV0YdKohSZQgUburhLK82dnlgf8yqqDCG9klVWnS49Ok6Z11Bl4_qlE1dNZwWxZDmR6nB-Ujw5_SlSjtiXxPjIkzBS6h2cHMnlBWaX6HV2lbFFUx1K*",
    "shshshfpb": "BApXWupcIb_hAVkcOjRpXnWxTsSg5xMRGBjHYY7hs9xJ1PdZfQoTHhwzCnwLqHqBQVgcxa6jnsaxtdrozuqsM5o8qNw62qTUyBc8",
    "cid": "9",
    "ipLoc-djd": "22-1930-50948-71603",
    "3AB9D23F7A4B3C9B": "ZNO3LCOVIT62OJGR46MK4IXZAMFH4F44GALK55OX2DU4TSQAUOZKUFCRSQJC47LCZQ5DHT4G47EWXSJXU6WADOBQSU",
    "sdtoken": "AAbEsBpEIOVjqTAKCQtvQu17m_Iz528R4_ZQbk6KVTd3kl6qZWhUIlSPI0JK2LVsgJii_WV3J_Kd797FnRcw5qUrTsh--l9-3-bQfQJmceZwHPS2BqUGN_gr7Mhu3-Q79L-ADmi1t-LZpsEhfoKRm52KiVyH45VYK7hkcET0fg7mXmv4MGFQoco"
}
url = "https://api.m.jd.com/api"

data = compiler.call("getH5ST")
print(data)

params = {
    "appid": "search-pc-java",
    "t": [
        "1775554130073",
        "1775554130087"
    ],
    "client": "pc",
    "clientVersion": "1.0.0",
    "cthr": "1",
    "uuid": "17739964898291387156454",
    "loginType": "3",
    "keyword": search_word,
    "functionId": "pc_search_searchWare",
    "body": json.dumps({
        "enc":"utf-8",
        "pvid":"bfd2a3a1e66a47ad803a1a4c8dd13684",
        "from":"home",
        "area":"22_1930_50948_71603",
        "page":5,
        "mode":None,
        "concise":False,"hoverPictures":False,"newAdvRepeat":False,"new_interval":True,
        "s":91   # 似乎和页码有关系
    },ensure_ascii=False,separators=(',',':')),
    "x-api-eid-token": "jdd03ZNO3LCOVIT62OJGR46MK4IXZAMFH4F44GALK55OX2DU4TSQAUOZKUFCRSQJC47LCZQ5DHT4G47EWXSJXU6WADOBQSUAAAAM5M4S5XTAAAAAACYQSWU2YB2MMZ4X",
    # "h5st": "20260407172854075;5zn5e5ab2zib2z27;f06cc;tk03w95561baa18naDQW09O1PrxS-ttdXgcvT9CvdaSXE4Kp7PTXvFTJKFaCuguK5SRMRoLAL76Eh2hjlRKb3SXvtV3b;fa36ca8aa819c7c80119f03a735d07b3dd0e0f34965cd1de93072c4bc175ff91;5.3;1775554130075;pjbMhj5e5DEfJGFN5jVT2XVe9CUeJrJdJrESJrpjh7Je6rJdJz1TIipjLDrgJn1TFqISyTYf0TIfIW4eFWld5TFf6XYeHi4TFmYS0rodJrJdJrEa-OFTGOEjLrJp-jZTFeYfFOYdIm1e5r4T1T1eGK4f5Hof7n1T7PYf5HIfHipjxj5PKSEQKeFjLrJp-jpfJrJdJbYOJipjLDrgJjIg4zZe1uWS-GFSMWoRJrJdJTEjLrJp-j5S1eoS8a1RoiHjLDIj_ulS9mFPJrpjh7Jj5fIQCOGjLDIjFqEjLrJp-3kjLD7fLDIj6nYOJipjLrpjh7pe6rJdJrYf2iFjLrpjLDrgz3pjxjJf6XETJrpjLrJp-jpaXqUgleIf7XkP3SHjLDIj_ulS9mFPJrpjLrJp-rojxjpd2iFjLrpjLDrg7rJdJPYOJipjLrpjh75f5rJdJTYOJipjLrpjh7pfLDIj2XETJrpjLrJp-rojxjpe2iFjLrpjLDrg1Pojxj5f2iFjLrpjLDrgJTIg6zpfJrJdJnYOJipjLrpjh7pfLDIjAOEjLrpjLDrg2rJdJfkQJrpjLrJp-rojxjpQJrpjLrJp-rojxjpS0ipjLrpjh-kjxjpS9WlOzWFjLrJp-3kjLDLjzmnXTClVRSHPG_lRMaFRJrJdJjoPJrpjLrJpwqJdJrkPJrpjh7Jj3ToNL-oe1zVRUq5d7zpf6rpWdq5P0ulS9G1WJrJdJnVO4ipjLD7N;56ad3ff75633618117d3330d4df2de12ee2d039b530cbd3ac4befe8a3cf93315;qbkgHGHQ8GlOIyVOF6JQ8G1P5WFW3yVSC61T-bEQGGlQI6ZNHuFT-bVR7qUT"
    "h5st":data["h5st"]
}
response = requests.get(url, headers=headers, cookies=cookies, params=params,impersonate="chrome110")
# response = requests.get(url, headers=headers, cookies=cookies, params=params)

resp_data = response.json()
wares = resp_data["data"]["wareList"]
for i,ware in enumerate(wares,start=1):

    item = {
        "店铺":ware["shopName"],
        "商品标题":pyquery.PyQuery(ware["wareName"]).text(),
        "京东官方价格": ware["jdPrice"],
            }

    print(i, item)



print(response)