

// 一些常量

localStorage = {
    // 猜测：应该跟访问链接/账号有关，主页和搜索页的值不一样
    WQ_dy1_vk: "{\"5.3\":{\"73806\":{\"e\":31536000,\"v\":\"pjpyny7mai5jp5b5\",\"t\":1773996547155},\"f06cc\":{\"e\":31536000,\"v\":\"5zn5e5ab2zib2z27\",\"t\":1773996547374},\"fb5df\":{\"e\":31536000,\"v\":\"jzip21vajjp22226\",\"t\":1773996547565}}}",
    WQ_dy1_tk_algo : '{"5zn5e5ab2zib2z27":{"f06cc":{"v":"N5i3R5jxjEaAfoe0TVj3dYmIfVf6dlyJT0GnRne_Y1L7YoK5fYiAf3y_Q1iBXVSdQEC3dXP7OECfVXiTS3H6dVuhPYm5fIa9Q2e5QXykbUaWY2T1Ylj5OoL4WEKjXHuFSGCAjJ7JTV6EQ5jxjFS2QFe3RVu9jkaGP0bDOl--SEr-Okf-TVH-TV6EQ5GwOFm5jkiHcZOmZoW7RlaZeWWASmLEd0SKPJq4OkjuUpiPjJyIQ1yITUbDOl-CgFe8QFeKOpKFPpH9T1u9T1m3hka4hZyIQ1yITUbDTVHCgFe8QFeKOpK5SpHwPFW3OUi9jlm-S1v9X3KqfIX1hke3PJHwMZiu","e":86400,"t":1775613523726}},"pjpyny7mai5jp5b5":{"73806":{"v":"N5i3R5jxjEaAfoe0doX0fomJSoL6dlypVXmRQFeqbFGidl6WWon3Z2ukZYG8R1iUPHakRli-RoadPoT3OYSqe3SnTUa9fHC3bWaJYWSCQoK2ZFuEXmP5SVO6XUaWSXi6RJ2KjJ7JTV6EQ5jxjFS2QFe3RVu9jkaGP0bDOl--SEr-Okf-TVH-TV6EQ5GwOFm5jkiHcZOWYEqVO0OaXFeafIPEd0SKPJq4OkjuUpiPjJyIQ1yITUbDOl-CgFe8QFeKOpKFPpH9T1u9T1m3hka4hZyIQ1yITUbDTVHCgFe8QFeKOpK5SpHwPFW3OUi9jlm-S1v9X3KqfIX1hke3PJHwMZiu","e":86400,"t":1775613523728}},"jzip21vajjp22226":{"fb5df":{"v":"N5i3R5jxjEaAfoe0eFeJfYmJf4H6dlyTf1_4dmmKeHf5XET7Z0akdnT7fXmmWlagRlCJOIiFNIT5U4SpVXuCZ1OqTUK0T33zXWH7XWi7TIGdX3ujfUOXS1SFQkGTQH-3NnX0jJ7JTV6EQ5jxjFS2QFe3RVu9jkaGP0bDOl--SEr-Okf-TVH-TV6EQ5GwOFm5jkiHcZORPYO7NlSSRWOlfmbEd0SKPJq4OkjuUpiPjJyIQ1yITUbDOl-CgFe8QFeKOpKFPpH9T1u9T1m3hka4hZyIQ1yITUbDTVHCgFe8QFeKOpK5SpHwPFW3OUi9jlm-S1v9X3KqfIX1hke3PJHwMZiu","e":86400,"t":1775618876244}}}'
}
window = {
    _version: "5.3",
    _appId: "f06cc"
}

constant = {
    "CANVAS_FP": "WQ_gather_cv1",
    "WEBGL_FP": "WQ_gather_wgl1",
    "STORAGE_KEY_TK": "WQ_dy1_tk_algo",  // token 相关
    "STORAGE_KEY_VK": "WQ_dy1_vk",  // fingerprint 相关
    "BEHAVIOR_FLAG": "JDst_behavior_flag"
}


h5st = {

}





/* _fingerprint的加密逻辑 */
function getFingerprint(version,appId){

    const wqData = localStorage[constant.STORAGE_KEY_VK]
    waJson = JSON.parse(wqData)

    return waJson[version][appId].v
}
h5st._fingerprint = getFingerprint(window._version, window._appId);

/* _token 的加密逻辑 */
function get_map1(_$U) {
    // _$U = _$U - 318;
    // var _$r = _$Q[_$U];  // _$Q 来自 webcontainer/js_security_v3_0.1.6.js?v=2024-06-20-17 这个 js 文件
    // if (a092750F.sFnleK === undefined) {
    //     var _$x = function(_$L) {
    //         var _$W = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
    //         var _$V = ''
    //           , _$H = '';
    //         for (var _$u = 0, _$M, _$c, _$O = 0; _$c = _$L.charAt(_$O++); ~_$c && (_$M = _$u % 4 ? _$M * 64 + _$c : _$c,
    //         _$u++ % 4) ? _$V += String.fromCharCode(255 & _$M >> (-(-0x16c5 + -0x13 * 0x1a9 + 0x22 * 0x199) * _$u & -0x2b6 * -0x3 + -0x25ba + 0x1d9e * 0x1)) : 0x1 * 0x1da2 + 0x2 * 0x12f4 + -0x438a) {
    //             _$c = _$W.indexOf(_$c);
    //         }
    //         for (var _$i = -0xbde + -0x12db + 0x1eb9, _$E = _$V.length; _$i < _$E; _$i++) {
    //             _$H += '%' + ('00' + _$V.charCodeAt(_$i).toString(0xbb1 * 0x2 + -0xafa + -0xc58)).slice(-(0x5 * -0x259 + -0x254 * -0x4 + 0x26f));
    //         }
    //         return decodeURIComponent(_$H);
    //     };
    //     a092750F.ZRuobe = _$x,
    //     _$b = arguments,
    //     a092750F.sFnleK = !![];
    // }
    // var _$X = _$Q[0].substring(0, 2)
    //   , _$T = _$U + _$X
    //   , _$D = _$b[_$T];
    // return _$D ? (_$r = a092750F.ZRuobe(_$r),
    // _$b[_$T] = _$r) : _$r = _$D,
    // _$r;

    if (_$U === 687){
        return 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts'
    }
}
function _$iH(_$iu, _$iM, _$ic){
      for (var _$iO = [], _$ii = 0, _$iE = 0; _$iE < _$iM; _$iE++){
          if (_$iE % 4) {
            var _$im = _$ic[_$iu.charCodeAt(_$iE - 1)] << (_$iE % 4) * 2 | _$ic[_$iu.charCodeAt(_$iE)] >>> 6 - _$iE % 4 * 2;
            _$iO[_$ii >>> 2] |= _$im << 24 - (_$ii % 4) * 8, _$ii++;
          }
      }
      // 返回的有效数据就是_$iO，_$ii
      // return _$iV.create(_$iO, _$ii);
      return {words:_$iO, sigBytes:_$ii};
}


function parse(_$iu) {
    var _$iM = _$iu.length
      , _$ic = 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts'

    _$iO = this._reverseMap = [];
    for (var _$ii = 0; _$ii < _$ic.length; _$ii++)
        _$iO[_$ic.charCodeAt(_$ii)] = _$ii;

    return _$iH(_$iu, _$iM, _$iO);
}
function tokenStringify(_$iP) {
      for (var _$iK = _$iP.words, _$iB = _$iP.sigBytes, _$id = [], _$ih = 0; _$ih < _$iB; _$ih++) {
        var _$ip = (_$iK[_$ih >>> 2] >>> 24 - _$ih % 4 * 8) & 255;
        _$id.push(String.fromCharCode(_$ip));
      }
      return _$id.join('');
}



// function getToken(fingerprint,appId){
function getToken(_$ir, _$ix){
    var tkData = JSON.parse(localStorage[constant.STORAGE_KEY_TK])
      , tkKey = tkData[_$ir][_$ix]

    var _$iD = tkKey.v
      , _$iL = null;


    console.log(tokenStringify(parse(_$iD)))
    _$iL = JSON.parse(tokenStringify(parse(_$iD)));
    console.log(_$iL)

    return _$OW({
        'e': tkKey.e,
        't': tkKey.t
    }) ? _$iL : null;

}

getToken("pjpyny7mai5jp5b5", "73806")
