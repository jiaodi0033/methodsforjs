const Method = require("./sumary");
// import {Method} from './sumary'

const a = new Method();
// console.log(a.getCurrentTime(new Date()))

// function throttle(fn,wait){
//       // 定时器实现
// //    var timer=null;
// //    return function(...args){
// //       var that = this;
// //       if(timer) return;
// //       timer = setTimeout(()=>{
// //         fn.apply(that,args);
// //         timer = null;
// //       },
// //         wait
// //       )
// //    }
//       // 时间戳实现
//       var pre=0; // 定义一个变量记录之前时间
//       return function(...args){
//           var that = this;
//           var curr = new Date()
//           if(curr-pre>wait) {
//             fn.apply(that,args)
//               pre = curr;
//           }
          
//       }
// }
var i=0
function click(){//触发函数
    console.log(i)
  betterFn()
  i+=1;
}
const betterFn = a.throttle(()=>{
    console.log('函数执行了',new Date())
},2000)

// document.addEventListener('scroll',betterFn)
// console.log((betterFn)())

setInterval(click,1000)