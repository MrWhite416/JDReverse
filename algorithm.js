

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

// getToken("pjpyny7mai5jp5b5", "73806")



/* 第八部分的加密逻辑 */


// 获取数组1
const _$iP1 = JSON.stringify({
  "sua": "Windows NT 10.0; Win64; x64",  // 系统ua片段
  "pp": {
    "p2": "jd_vlzOAROlTVYV"  // 用户标识
  },
  "extend": {
    "wd": 0,  // 窗口相关标记
    "l": 0,  // 页面加载状态
    "ls": 5,  // 本地存储/会话标记
    "wk": 0,  // webWorker相关
    "bu1": "0.1.6",  // 埋点版本
    "bu3": 76,
    "bu4": 0,
    "bu5": 0,
    "bu6": 23,
    "bu7": 0,
    "bu8": 0,
    "random": "fC3j513kq29I",  // 随机串
    "bu12": 5,
    "bu10": 14,
    "bu11": 3  // bu系列，记录滚动、停留、点击次数、页面深度等
  },
  "pf": "Win32",  // 系统
  "random": "tlFV0x3X5",  // 随机串，防重放
  "v": "h5_file_v5.3.2",  // h5st的版本
  "bu4": "0",
  "canvas": "0f473da320798105d68bd37b61c37c05",  // 画布指纹，通过绘制图像提取显卡/渲染差异
  "webglFp": "3b3187c0ea1164d0bc125057cdb87696",  // WebGL  显卡指纹
  "ccn": 20,  // 内部计数
  "fp": "npppziinm1eaibp3"  // 最终合成的设备指纹
},null,2)
function parseStr(_$iP) {
    for (var _$iK = _$iP.length, _$iB = [], _$id = 0; _$id < _$iK; _$id++) _$iB[_$id >>> 2] |= (255 & _$iP.charCodeAt(_$id)) << 24 - (_$id % 4 * 8);
    console.log(_$iB.length)
    return {
        "words": _$iB,
        "sigBytes": _$iK,
    };
}
const array1 = parseStr(unescape(encodeURIComponent(_$iP1)));
// console.log(array1)




// 获取数组2
const _$iP = array1

function fromWordArray(_$iP) {
    for (var _$iK = new Uint8Array(_$iP.sigBytes), _$iB = 0; _$iB < _$iP.sigBytes; _$iB++) _$iK[_$iB] = _$iP.words[_$iB >>> 2] >>> 24 - _$iB % 4 * 8 & 255;
    return _$iK;
}

const nums11 = [...fromWordArray(_$iP)]
nums11.push(...[3,3,3])

// 按三等份 取出然后 按照取出的反序合并为一个新表
nums = []

for (let i = nums11.length - 3; i >=0; i -= 3) {
    let n = nums11.slice(i, i + 3)
    nums.push(...n)
}

// console.log(nums.length)
// console.log(JSON.stringify(nums))

// 获取数组3

function toWordArray(_$iP) {
    for (var _$iK = [], _$iB = 0; _$iB < _$iP.length; _$iB++) _$iK[_$iB >>> 2] |= _$iP[_$iB] << 24 - (_$iB % 4) * 8;
    return {
        words:_$iK,
        sigBytes: _$iP.length
    };
}

// console.log(toWordArray(nums))

let  _$iu = {
    "$super": {
        "$super": {}
    },
    "words": [
        50529058,
        175989360,
        862282089,
        1852649850,
        1768517744,
        1881154158,
        1881291296,
        577121290,
        538980912,
        1847736866,
        1667435040,
        540418604,
        926300516,
        1647850807,
        1664234800,
        1650667828,
        1680879921,
        909141345,
        943154018,
        858857506,
        862986810,
        1735149175,
        1700929568,
        572664842,
        1664103779,
        859267638,
        828650295,
        909664816,
        895760696,
        825372727,
        1684091700,
        926097968,
        1713519136,
        1986098019,
        1634607136,
        572664842,
        539111476,
        574235234,
        1963597856,
        841100334,
        858677110,
        896101477,
        895444512,
        577271330,
        975183906,
        573311539,
        913533550,
        1163407991,
        975184495,
        1830969710,
        1679827570,
        738861107,
        841111401,
        1849303074,
        1885741600,
        539131180,
        168435744,
        975188785,
        824320610,
        1965039648,
        738861088,
        825503778,
        979531057,
        538976778,
        538976309,
        741483066,
        1651847456,
        539101728,
        542581292,
        1634744181,
        859006823,
        1428318025,
        574234724,
        1869443681,
        1847599138,
        169877536,
        808204322,
        975331957,
        538976300,
        169884192,
        812988194,
        539124256,
        538981164,
        171581490,
        1966481952,
        576856096,
        540027914,
        574234722,
        1966415904,
        571088928,
        540027956,
        574235234,
        1965039648,
        738861088,
        926364450,
        975331957,
        538976300,
        169881142,
        573582897,
        975184501,
        824320034,
        1646272544,
        808192546,
        975184503,
        1797267488,
        738861114,
        540372083,
        572530722,
        169877536,
        808217634,
        975183906,
        169877536,
        808215586,
        975184503,
        538976288,
        2064278562,
        980706670,
        577075210,
        538976381,
        740428320,
        1448695375,
        1817464641,
        1383492730,
        1784962874,
        539127858,
        572530722,
        169877562,
        544960624,
        572530722,
        573311608,
        909390907,
        543780406,
        991975216,
        774919200,
        829628494,
        1685026647,
        1768831520,
        578117922,
        539128699,
        169869312
    ],
    "sigBytes": 558,
    "clamp": function() {
        var _$iP = this.words
          , _$iK = this.sigBytes;
        _$iP[_$iK >>> 2] &= 4294967295 << 32 - _$iK % 4 * 8,
        _$iP.length = Math.ceil(_$iK / 4);
    }
}
_$iu = {..._$iu, ...toWordArray(nums)}


const _map1 = "rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts"

function clamp() {
    var _$iP = this.words
      , _$iK = this.sigBytes;
    _$iP[_$iK >>> 0x9d0 + -0xb8 * -0x8 + -0x2 * 0x7c7] &= -0x3f4904b4 + 0x4f1 * 0x5c5613 + -0x88fc4f30 << -0x16 * -0x37 + -0xf54 + -0xaba * -0x1 - _$iK % (0x17b + 0x25cf + 0x1c9 * -0x16) * (0xad * -0x1d + 0x5e * -0x41 + -0x11 * -0x28f),
    _$iP.length = _$ir.ceil(_$iK / (0x12 * -0xed + 0x2243 + -0x1195));
}

function stringify(_$iu) {
    var _$iM = _$iu.words
      , _$ic = _$iu.sigBytes
      , _$iO = _map1;
    _$iu.clamp();
    for (var _$ii = [], _$iE = 0; _$iE < _$ic; _$iE += 3)
        for (var _$im = ((_$iM[_$iE >>> 2] >>> 24 - (_$iE % 4) * 8) & 255) << 16 | (_$iM[_$iE+ 1 >>> 2] >>> 24 - (_$iE + 1) % 4 * 8 & 255) << 8 | _$iM[_$iE + 2 >>> 2] >>> 24 - (_$iE + 2 % 4) * 8 & 255, _$iN = 0; _$iN < 4 && _$iE + (0.75 * _$iN) < _$ic; _$iN++) _$ii.push(_$iO.charAt((_$im >>> 6 * (3- _$iN)) & 63));

    return _$ii.join('');
}

const tt = stringify(_$iu)
// 反序
let new_tt= ""
for (let i=0;i<tt.length;i+=4) {

    new_tt += tt.slice(i,i+4).split("").reverse().join("")

}

// console.log(new_tt)


/* 第九部分 */




// 获取数组3
const ppstr = "tk03w83a11b7b18nYc3zjKKU115GB1C5S8NNDt_x3nmgZNdsdipxkpW1vA5Q8xD0rM4Q_BeHYe5uq7ZTJlmMvPHAZ-u5npppziinm1eaibp32026041703441494159f06ccN807BZiGYV67"


x = 940 * 14
num = x % 64

669 112
781 51
832 50
882 48
930


function finalize(_$iH) {
    var _$iu,
    _$iM = this._hasher;

    var _$ic = _$iM._seData(_$iH);
    _$iH = _$ic.substring(0, _$ic.length - 3);

    var _$iO = _$iM.finalize(_$iH);
    return _$iM.reset(), _$iM.finalize(_$Ui(_$iu = this._oKey.clone()).call(_$iu, _$iO));
}

const paramStr = "appid:appid&functionid:functionId"

finalize(paramStr)


// 获取数组4

/*
* {"0":35,"1":180,"2":55,"3":203,"4":121,"5":106,"6":195,"7":186,"8":195,"9":206,"10":55,"11":34,"12":99,"13":117,"14":13,"15":111,"16":243,"17":91,"18":117,"19":252,"20":189,"21":52,"22":16,"23":221,"24":149,"25":249,"26":17,"27":50,"28":161,"29":132,"30":184,"31":253}
*  */

const a11 = {
    "words": [
        1466669290,
        -652759276,
        1100771637,
        579898389,
        917667311,
        735493717,
        1329547849,
        356425905
    ],
    "sigBytes": 32
}

let aa22 = fromWordArray(a11)
// console.log(aa22)
aa22 = [...aa22]
// 前六个数反序
const array5 = [...aa22.slice(0,6).reverse(),...aa22.slice(6)]
console.log(array5)



// const array5 = [
//     164,
//     132,
//     94,
//     118,
//     111,
//     227,
//     45,
//     202,
//     157,
//     193,
//     11,
//     81,
//     25,
//     136,
//     188,
//     175,
//     100,
//     181,
//     188,
//     103,
//     52,
//     63,
//     0,
//     14,
//     104,
//     155,
//     254,
//     152,
//     148,
//     33,
//     162,
//     59
// ]

const _$iP3 = toWordArray(array5)


// const _$iP3 = {
//     "$super": {
//         "$super": {}
//     },
//     "words": [
//         -2099733242,
//         457310341,
//         1829004616,
//         -1765142720,
//         -649311524,
//         -1157978580,
//         1037620456,
//         -1446641826
//     ],
//     "sigBytes": 32
// }

function format(_$iP) {
    for (var _$iK = _$iP.words, _$iB = _$iP.sigBytes, _$id = [], _$ih = 0; _$ih < _$iB; _$ih++) {
    var _$ip = _$iK[_$ih >>> 2] >>> 24 - (_$ih % 4) * 8 & 255;
    _$id.push((_$ip >>> 4).toString(16)), _$id.push((15 & _$ip).toString(16));
    }
    return _$id.join('');

}


const ciphertextNine = format(_$iP3)
console.log(ciphertextNine)
