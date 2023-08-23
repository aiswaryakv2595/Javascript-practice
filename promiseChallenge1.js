//challenge 1
// console.log('start')//--------1
// const promise1 = new Promise((resolve,reject)=>{
//     console.log(1)//----------2
// })
// console.log('end')//---------3
//--output
//start
//1
//end
//-----challenge2

console.log('start')//-------1
const promise2 = new Promise((resolve,reject)=>{
    console.log(1)//---------2
    resolve(2)
})
promise2.then((res)=>{
    console.log(res)//-----4
})
console.log('end')//-------3