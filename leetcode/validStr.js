// 有效的括号
/* 
    算法描述：给定一个只包含 "{","(","[","}",")","]" 的字符串，判断字符串是否有效。
    有效 字符串满足：1.左括号必须使用同类型的右括号闭合;
                   2.左括号必须以正确的顺序闭合。
*/

const isValid = function(str){
    let map = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    };
    let stack = [];
    for (let i=0;i<str.length;i++){
        if(map[str[i]]){
            stack.push(str[i]);
        }else if(str[i]!==map[stack.pop()]){
            return false;
        }
    }
    return stack.length === 0;
}

let str = "{{{}}}{[]}"
console.log(isValid(str))