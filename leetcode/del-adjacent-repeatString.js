// 删除相邻重复字符
/*
   算法描述：给定一个字符串，判断是否有相邻重复字符，如果有则删除该字符
   eg: input: 'assddasf'
       output:'sf' 
   */

const delAdj = function(str){
    let stack = [];
    for(v of str){
        let prev = stack.pop();
        if(prev !== v){
            stack.push(prev)
            stack.push(v)
        }
    }
    return stack.join('');
}

const delAdj2 = function(str,k){ //定义删除重复k 次的字符
    let stack = [];
    for(v of str){
        let prev = stack.pop();
        if(!prev ||prev[0]!==v){
            stack.push(prev)
            stack.push(v)
        }else if(prev.length<k-1){
            stack.push(prev+v)
        }
    }
    return stack.join('');
}

const delAdj3 = function(str){ //定义删除重复>=2 次的字符
    let stack = [];
    let top,next;
    let i = 0
    while(i<str.length){
        top = stack[stack.length-1]
        next = str[i]
        if(top === next){
            stack.pop();
            while(str[i] === top) i+=1;
        }else{
            stack.push(next);
            i+=1;
        }
    }
    return stack.join('');
}
const str = 'assdddaaaaaaaaaaaaaaaassssssssssssssgdhf';
console.log(delAdj3(str))