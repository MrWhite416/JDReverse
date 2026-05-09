


import hashlib
import hmac


def hmacsha256(key,text):

    block_size = 64

    if len(key) > block_size:
        bk= hashlib.sha256(key.encode('utf-8')).hexdigest().encode('utf-8')
    else:
        bk = key.encode()


    bk += b"\x00" * (block_size - len(key))

    i_pad = bytes([b ^ 0x36 for b in bk])
    o_pad = bytes([b ^ 0x5c for b in bk])

    print(i_pad.decode())
    print(o_pad.decode())

    inner = hashlib.sha256(i_pad + text.encode()).digest()

    return hashlib.sha256(o_pad+ inner).hexdigest()




aa = hmac.HMAC("111".encode("utf-8"),"1".encode(),"sha256").hexdigest()
print(aa)
print(hmacsha256("111","1"))