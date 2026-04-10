 function vmpOne(_$ir) {
        'use strict';
        var i = _3nkbm;
        var x = _2mzbm;
        var Nb, _$ix, _$iX, _$iT, _$iD;
        var w = [];  // 寄存器
        var e = 5084;  // 命令指针
        var r, b;
        l35: for (; ; ) {  // 虚拟机循环
            switch (x[e++]) {   // 取出指令码
            case 6:
                return w.pop();  // 返回栈顶值
                break;
            case 7:
                w.push(_$OU);     // 数据入栈
                break;
            case 14:
                w.push(_$ix);  // 数据入栈
                break;
            case 20:
                if (w.pop())  // 栈顶弹出判断值
                    ++e;
                else
                    e += x[e];
                break;
            case 21:
                w.push(this[_1sxbm[344 + x[e++]]]);  // 取对象成员入栈
                break;
            case 22:
                w.push({});  // 空对象入栈
                break;
            case 28:
                w.push(_1sxbm[344 + x[e++]]);  // 取对象成员入栈
                break;
            case 34:
                w[w.length - 4] = i.call(w[w.length - 4], w[w.length - 3], w[w.length - 2], w[w.length - 1]);  // 调用函数，参数均为栈中值
                w.length -= 3;  // 删除末尾3个元素
                break;
            case 35:
                _$ix = w[w.length - 1];  // 变量赋值
                break;
            case 36:
                w.push(_$iD);  // 数据入栈
                break;
            case 38:
                w.pop();   // 弹栈丢弃
                break;
            case 40:
                w.push(_$iT);  // 数据入栈
                break;
            case 53:
                r = w.pop();  // 栈顶弹出，变量赋值
                w[w.length - 1] = w[w.length - 1] == r;  // 判断值入栈
                break;
            case 54:
                Nb = w[w.length - 1];  // 变量赋值
                break;
            case 55:
                w.push(_$iX);  // 数据入栈
                break;
            case 57:
                w.push(_$OQ);  // 数据入栈
                break;
            case 59:
                w.push(this);  // 数据入栈
                break;
            case 60:
                return;  // 返回空值
                break;
            case 62:
                if (w[w.length - 1] != null) {
                    w[w.length - 2] = i.call(w[w.length - 2], w[w.length - 1]);  // 函数调用，
                } else {
                    r = w[w.length - 2];
                    w[w.length - 2] = r();
                }
                w.length--;
                break;
            case 63:
                _$iD = w[w.length - 1];  // 变量赋值
                break;
            case 68:
                w.push(Date);  // 数据入栈
                break;
            case 71:
                r = w.pop();
                w[w.length - 1] -= r;  // 减法操作
                break;
            case 78:
                w.push(w[w.length - 1]);  // 数据入栈
                w[w.length - 2] = w[w.length - 2][_1sxbm[344 + x[e++]]];  // 函数调用
                break;
            case 79:
                w.push(Nb);  // 数据入栈
                break;
            case 80:
                w.push(_$ir);  // 数据入栈
                break;
            case 81:
                w.push(null);  // 数据入栈
                break;
            case 83:
                w.push(iw);  // 数据入栈
                break;
            case 89:
                _$iT = w[w.length - 1];  // 变量赋值
                break;
            case 90:
                w[w.length - 5] = i.call(w[w.length - 5], w[w.length - 4], w[w.length - 3], w[w.length - 2], w[w.length - 1]);  // 函数调用
                w.length -= 4;
                break;
            case 91:
                if (w[w.length - 2] != null) {
                    w[w.length - 3] = i.call(w[w.length - 3], w[w.length - 2], w[w.length - 1]);  // 函数调用
                    w.length -= 2;
                } else {
                    r = w[w.length - 3];
                    w[w.length - 3] = r(w[w.length - 1]);
                    w.length -= 2;
                }
                break;
            case 92:
                _$iX = w[w.length - 1];  // 变量赋值
                break;
            case 98:
                w.push(x[e++]);  // 数据入栈
                break;
            }
        }
    }

console.log(void 455)