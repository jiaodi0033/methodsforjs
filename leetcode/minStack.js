// 最小栈
/* 算法描述：设计一个支持 push,pop,top 的操作，并能在常数时间内检测到最小元素的栈;
   push(value):入栈；
   pop():出栈；
   top(): 返回栈顶元素
   getMin():检测栈内最小元素

*/
const minStack = function () {
    this.items = [];
    this.min = null;
}

minStack.prototype = {
    push(val){
        if (!this.items.length) this.min = val;
        this.min = Math.min(val,this.min);
        this.items.push(val)
    },
    pop(){
        if(!this.items.length) return ;
        let num = this.items.pop();
        this.min = Math.min(...this.items)
        return num;
    },
    top(){
        if(!this.items.length) return null;
        return this.items[this.items.length-1];
    },
    getMin(){
        return this.min;
    }
}
// 进栈
// minStack.prototype.push = function (val) {
//     if (!this.items.length) this.min = val;
//     this.min = Math.min(val,this.min);
//     this.items.push(val)
// }

// //出栈
// minStack.prototype.pop = function () {
//     if(!this.items.length) return ;
//     let num = this.items.pop();
//     this.min = Math.min(...this.items)
//     return num;
// }

// //获取栈顶元素
// minStack.prototype.top = function () {
//     if(!this.items.length) return null;
//     return this.items[this.items.length-1];
// }

// minStack.prototype.getMin = function () {
//     return this.min;
// }

let arr = new minStack();
arr.push(5)
arr.push(10)
arr.push(15)
arr.pop()
console.log(arr.top())