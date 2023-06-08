let score = 10
const promise = new Promise((resolve,reject)=>{
    if(score>100){
        resolve("Horray")
    }
    else
    reject("better luck next time")
})
promise.then((value)=>
console.log(value))
.catch((err=>console.log(err)))






