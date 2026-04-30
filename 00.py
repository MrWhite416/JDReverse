


import hashlib


s = "12"

sha = hashlib.sha256(s.encode('utf-8'))
print(sha.hexdigest())

a = 826831460 ^ 1549556828
print(a)