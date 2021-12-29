function promiseAll(promises){
   
   return new Promise((resolve,reject)=>{ //返回一个Promise对象
        if(!Array.isArray(promises)){ // 判断参数必须为数组
            throw new TypeError("Argument must be of array type");
        }
       if(promises.length===0) resolve([])
       const result = [];
       let count = 0;
       promises.forEach((item,index)=>{
           if(Object.prototype.toLocaleString.call(item).slice(8,-1)==="Promise"){
            item.then((res)=>{
                result[index] = res;
                count++;
                count===promises.length&& resolve(result);
                 },
                 err=>{
                    //  
                   reject(err);
                 }
                 )
           }else{
               result[index]=item;
               count++;
               count===promises.length&& resolve(result);
           }
    
       })
   })
}
function promiseAllSettled(promises){
   
    return new Promise((resolve,reject)=>{ //返回一个Promise对象
         if(!Array.isArray(promises)){ // 判断参数必须为数组
             throw new TypeError("Argument must be of array type");
         }
        if(promises.length===0) resolve([])
        const result = [];
        let count = 0;
        promises.forEach((item,index)=>{
            if(Object.prototype.toLocaleString.call(item).slice(8,-1)==="Promise"){
             item.then((res)=>{
                 result[index] = {status:'fulfilled',value:res};
                 count++;
                 count===promises.length&& resolve(result);
                  },
                  err=>{
                     //  
                     
                     result[index] = {status:'frejected',reason:err};
                     count++;
                     count===promises.length&& resolve(result);
                  }
                  )
            }else{
                result[index]={status:'fulfilled',value:item};
                count++;
                count===promises.length&& resolve(result);
            }
     
        })
    })
 }
 function promiseAny(promises){
   
    return new Promise((resolve,reject)=>{ //返回一个Promise对象
         if(!Array.isArray(promises)){ // 判断参数必须为数组
             throw new TypeError("Argument must be of array type");
         }
        if(promises.length===0) resolve([])
        let count = 0;
        promises.forEach((item,index)=>{
            if(Object.prototype.toLocaleString.call(item).slice(8,-1)==="Promise"){
             Promise.resolve(item).then((res)=>{
                 resolve(res)
                 }).catch(err=>{
                    //
                    count++  
                    count===promises.length&& reject("AggregateError: No Promise in Promise.any was resolved");
                 })
            }else{
                resolve(item);
            }
     
        })
    })
 }
 function promiseRace(promises){
   
    return new Promise((resolve,reject)=>{ //返回一个Promise对象
         if(!Array.isArray(promises)){ // 判断参数必须为数组
             throw new TypeError("Argument must be of array type");
         }
        if(promises.length===0) return resolve([]);
        promises.forEach((item,index)=>{
            if(Object.prototype.toLocaleString.call(item).slice(8,-1)==="Promise"){
             Promise.resolve(item).then((res)=>{
                 resolve(res)
                 }).catch(err=>{
                    //
                    reject(err);
                 })
            }else{
                resolve(item);
            }
     
        })
    })
 }
 function promiseThen(promise){
     return new Promise()
 }
// const a = promiseAll([33])
// a.then(val=>{
//     console.log(val)
// }).catch(err=>{
//     console.log(err)
// })

// Promise.all([]).then(val=>{
//     console.log("===",val)
// })
let data="";
const pro = new Promise((reject)=>{
    reject(3)
})
pro.then(val=>{
    console.log(val)
    data = val;
}).catch((err)=>{
    console.log(err)
    data = err;
})
.finally(()=>{
    console.log(data)

})
let pro1 = new Promise((resolve)=>{
    setTimeout(resolve,500,"最终完成")
})
let pro2 = new Promise(
    reject=>{
        setTimeout(reject,100,'更快完成')
    }
)
let pro3 = new Promise(reject=>{
    setTimeout(reject,200,'很快完成')
})
const res = promiseRace([pro1,pro2,pro3])




const promise1 = Promise.resolve(3);
console.log(pro3)
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2,8];

// Promise.allSettled(promises).
//   then((results) => {
//   let res = results.map((result) => result.status)
// console.log(results)}
      
//       );
// promiseAll(promises).then(res=>{
//     console.log(res)
// })