// 数组方法 1.at() 浏览器有
// 2.concat()
// 3.copyWithin()
// 4.every()
// 5.fill() 
// 6.filter()
// 7.find()
// 8.findIndex()
// 9.flat()
// 10.flatMap()
// 11.forEach()
// 12 from()
// 13 includes()
// 14.indexOf()
// 15.join()
// 16.keys()
// 17.lastIndexOf()
// 18.map()
// 19.of()
// 20.pop()
// 21.push()
// 22.reduce()
// 23.reduceRight()
// 24.reverse()
// 25.shift()
// 26.slice()
// 27.some()


const arr = [2,3,4,,5,[7,9,[11,12,[21,22,23],13]],6];
// console.log(arr.at(2))
const arr2 = [
    {name:'jiaodi',age:23},
    {name:'zhnagsan',age:43},

]
const b = new Array("d","f")
const c = b.concat(arr,'g')
// arr[0].push(7)
// console.log(arr.flat())
const res1 = arr.reduce((item,index)=>{
    return item.concat(index)
},[])

function* flatten(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            yield* flatten(item);
        } else {
            yield item;
        }
    }
}

var arr3 = ["jiao","Di"];
const flattened = [...flatten(arr3)];
console.log(arr.flat(Infinity))
const arr4 = [1,2,3,[4,5,,[6,7]],8]
// console.log(arr4.flat(2))
const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(mapper);
function f() {
    return Array.from(arguments);
  }
console.log(arr3.join("+"))
