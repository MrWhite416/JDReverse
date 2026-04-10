const {log} = require("console")


// 写代理
const watch = function(obj,objName){
    return new Proxy(obj,{
        get:function(obj,property,receiver){

            // 针对 Node.js 内置的、对 this 有严格要求的属性
            const strictProps = ['crypto', 'performance', 'globalThis'];
            const isStrict = (obj === global || obj === globalThis) && strictProps.includes(property);
            const safeReceiver = isStrict ? obj : receiver;

            const value = Reflect.get(obj, property, safeReceiver);

            // const value = Reflect.get(obj,property,receiver);
            if (typeof value !== null && typeof value === "object"){
                return watch(value, `${objName}.${property}`)
            }

            // Symbol 属性必须用 .toString()
            const key = typeof property === "symbol" ? property.toString() : property

            // log(`get | ${objName} | ${key} | ${typeof value} | ${value}`)
            log(`get | ${objName} | ${key} | ${typeof value}`)
            return value
        },
        set:function(obj,property,value,receiver){

            log(`set | ${objName} | ${property} | ${typeof value}`)
            return Reflect.set(obj,property,value,receiver)
        },
        // 监控 in 操作符
        has: function(obj,property){
            log(`in 操作符 | ${objName} | ${property} | 是否存在：${property in obj}`)
            return Reflect.has(obj, property)
        },
        // 监控 获取对象的原型的方法
        getPrototypeOf:function(obj){
            log(`prototype | ${objName} | ${Object.getPrototypeOf(obj)}`)
            return Reflect.getPrototypeOf(obj)
        },
        // 监控 获取直接存在于对象上的指定属性的配置信息
        getOwnPropertyDescriptor:function(obj, property){
            log(`getOwnPropertyDescriptor | ${objName} | ${property} | ${Object.getOwnPropertyDescriptor(obj,property)}`)
            return Reflect.getOwnPropertyDescriptor(obj,property)
        }
    })
}




window = global

document = {
    // querySelector:function querySelector(){
    //     log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
    // },
    // referrer:"https://search.jd.com/Search?keyword=%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF10nfc%E7%89%88&enc=utf-8&pvid=bfd2a3a1e66a47ad803a1a4c8dd13684&themeColor=&from=home&spmTag=YTAyMTkuYjAwMjM1Ni5jMDAwMDcyMTAuc2VhcmNoX2J1dHRvbg",

}
Object.setPrototypeOf(document, {
    all:{}
})
Object.setPrototypeOf(document.__proto__, {
    createElement: function createElement(){
        log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
        if (arguments[0] === "script"){
            return script
        }
    },
    documentElement:{},
    createEvent: function createEvent(){
        log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
    },
    querySelector: function querySelector(){
        log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
    }
})
// window.XMLHttpRequest = function xhr(){
//     log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
// }
// window.outerWidth = 1365
// window.outerHeight = 921

// Object.defineProperties(document.__proto__, {
//     querySelector: function (){
//         log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
//     }
// })


Element = function Element(){
    log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
}
// Node = function Node(){
//     log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
// }
// Object.setPrototypeOf(Element,Node)


//
// screen = {}
// Screen = function (){}
// screen.__proto__ = Screen.prototype = {
//     width: 1920,
//     height: 1080,
//     devicePixelRatio:1
// }




// location = {
//     href:"https://search.jd.com/Search?keyword=%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF10nfc%E7%89%88&enc=utf-8&pvid=bfd2a3a1e66a47ad803a1a4c8dd13684&themeColor=&from=home&spmTag=YTAyMTkuYjAwMjM1Ni5jMDAwMDcyMTAuc2VhcmNoX2J1dHRvbg",
//     origin: "https://search.jd.com"
// }



localStorage = {
    // WQ_gather_wgl1: '{"v":"807e1fc2d5512f28ef75c267169f0fca","t":1775559066006,"e":31536000}',


}
Object.setPrototypeOf(localStorage, {
    getItem: function getItem(){
        log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
    }
})



// 标签元素
script = {

}


// canvas = {
//     getContext: function getContext(){
//         log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
//         if (arguments[0] === "experimental-webgl"){
//             return canvasContent
//         }
//     }
// }
// canvasContent = {
//     createBuffer: function createBuffer(){
//         log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
//         return bufferObject
//     },
//     bindBuffer: function bindBuffer(){
//         log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
//
//     },
//     ARRAY_BUFFER:"number",
//
// }
// bufferObject = {
//     "Symbol.toPrimitive":"undefined",
//     "Symbol.toStringTag":"string",
// }


setTimeout = function setTimeout(){
    log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
}
// setInterval = function setInterval(){
//     log(`函数 ${arguments.callee.name} 接收的参数是：${[...arguments]}`)
// }


watchObjs = [
    "window",
    "document",
    "location",
    "navigator",
    "screen",
    "history",
    "localStorage",
    "sessionStorage",
    "Element",
    // "Node",
    "script"
    // "canvas",
    // "canvasContent",
    // "bufferObject"
]
for (const it of watchObjs){
    if (typeof globalThis[it] === "undefined"){
        globalThis[it] = {}
    }
    globalThis[it] = watch(eval(it),it)
}


