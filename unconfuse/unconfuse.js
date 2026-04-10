const fs = require("fs")
const generate= require("@babel/generator").default
const traverse= require("@babel/traverse").default
const tt= require("@babel/types")
const parser= require("@babel/parser")


const old_code = fs.readFileSync("./js_security.js", "utf8")
let ast = parser.parse(old_code)



/* 处理二元表达式 */
function compute(node) {
    try {
        // 1. 字面量 123 'abc' true
        if (tt.isLiteral(node)) {
            return node.value;
        }

        // 2. 一元表达式 !true -123 ~8
        if (tt.isUnaryExpression(node)) {
            const arg = compute(node.argument);
            return eval(node.operator + arg);
        }

        // 3. 二元表达式 1+2 3*4 a%b
        if (tt.isBinaryExpression(node)) {
            const left = compute(node.left);
            const right = compute(node.right);
            return eval(`${left}${node.operator}${right}`);
        }

        // 识别不了的，返回 undefined（不处理）
        return undefined;
    } catch (e) {
        return undefined;
    }
}




traverse(ast, {
    BinaryExpression(path){
        const node = path.node;

        let flag = false
        path.traverse({
            Identifier(p){
                flag = true;
            }
        })
        if (flag) return

        const value = compute(node)
        console.log(path.toString())
        console.log(value)

        path.replaceWith(tt.valueToNode(value))
        path.skip ()
    }
})

const {code:newCode} = generate(ast)

fs.writeFileSync("./new_js-security.js", newCode)




