let arr = [1,2,30,10,12]
let flatArr = [[1,2],4,[6,4]]
console.log(arr)
let mapArr = arr.map(res => res*2)
console.log(mapArr);
let filterArr = arr.filter(num=>num>10)
console.log(`filter ${filterArr}`)
let reduceArr = arr.reduce((total,value)=>total+value,0)
console.log(`reducer ${reduceArr}`)

let sliceArr = arr.slice(2)
console.log(sliceArr)
const newArr = flatArr.flat()
console.log(newArr)
arr.sort((a,b)=>a-b)
console.log(`sort ${arr}`)

