import requests
import base64
import cv2
import numpy as np

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "authorization": "Bearer 2OW94XiXDyH72LOVhvkxyUg5tlTrRCh9PdQTfYYDuva4zYX7ONPHN9",
    "cache-control": "no-cache",
    "origin": "https://www.rdv-prefecture.interieur.gouv.fr",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.rdv-prefecture.interieur.gouv.fr/",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0"
}
url = "https://api.piste.gouv.fr/piste/captchetat/v2/simple-captcha-endpoint"
params = {
    "get": "image",
    "c": "captchaFR"
}
response = requests.get(url, headers=headers, params=params)

imageb64 = response.json()["imageb64"].replace("data:image/png;base64,", "")
img = base64.b64decode(imageb64)

nparr = np.frombuffer(img, np.uint8)
frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

cv2.imshow("1212", frame)
cv2.waitKey(0)
cv2.destroyAllWindows()