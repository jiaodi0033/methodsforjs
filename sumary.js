class Method{
    getCurrentTime(date) { // 时间格式化time1: YYYY-MM-DD HH:mm:SS
        let Y, M, D, H, m, s, time1, time2; // time2 YYYY-MM-DD
        Y = date.getFullYear();
        M = date.getMonth() + 1;
        D = date.getDate();
        H = date.getHours();
        m = date.getMinutes();
        s = date.getSeconds();
        time1 = Y + '-' + (M < 10 ? '0' + M : M) + '-'
          + (D < 10 ? '0' + D : D) + ' ' + (H < 10 ? '0' + H : H)
          + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        time2 = Y + '-' + (M < 10 ? '0' + M : M) + '-'
          + (D < 10 ? '0' + D : D);
        // console.log(time1,time2); // 输出时间
        return [time1, time2];
    }
    unique(arr,val) { //对象数组按照某个key去重
        const res = new Map();
        return arr.filter(item => !res.has(item[val]) && res.set(item[val], 1))
    }
    debounce(fn,wait){//防抖处理函数 fn:目标执行函数，wait: 触发时间间隔 S
      var timer = null;
      return function(...args){
        var that=this;
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
          fn.apply(that,args)
          },
          wait
        ) 
      }
    }
    throttle(fn,wait){  //节流处理函数，fn:目标执行函数，wait: 触发时间间隔 S
      // 时间戳实现
      // var pre_time = 0;
      // return function(...args){
      //   var that = this;
      //   var now = new Date();
      //   if(now-pre_time>wait){
      //     fn.apply(that,args);
      //     pre_time = now;
      //   }
      // }
      // 定时器实现
      var timer = null;
      return function(...args){
        var that = this;
        if(timer)return
        timer = setTimeout(()=>{
          fn.apply(that,args);
          timer = null;
        },
        wait
        )
      }

    }
}

module.exports = Method;
