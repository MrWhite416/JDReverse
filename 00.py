


import hashlib


s = "12"

sha = hashlib.sha256(s.encode('utf-8'))
print(sha.hexdigest())