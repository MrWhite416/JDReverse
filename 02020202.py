import httpx


url = "https://sch.shanchendaili.com/api.html?action=get_ip&key=HU09ea45019909063110t6oI&time=10&count=1&type=text&textSep=3&only=0"

resp = httpx.get(url)
print(resp.text)
