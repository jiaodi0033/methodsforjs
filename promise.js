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

// const a = promiseAll([33])
// a.then(val=>{
//     console.log(val)
// }).catch(err=>{
//     console.log(err)
// })

// Promise.all([]).then(val=>{
//     console.log("===",val)
// })