const promise1 = Promise.resolve("promise 1")
const promise2 = Promise.reject("promise 2")
const promise3 = Promise.resolve("promise 3")
 
Promise.all([promise1,promise2,promise3])
.then((result)=>console.log(`promise.all ${result}`))
.catch((error)=>console.log(`all ${error}`))

Promise.allSettled([promise1,promise2,promise3])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

Promise.any([promise1,promise2,promise3])
.then((result)=>console.log(`promise.any ${result}`))
.catch((error)=>console.log(error))

Promise.race([promise1,promise2,promise3])
.then((result)=>console.log(`promise.race ${result}`))
.catch((error)=>console.log(error))