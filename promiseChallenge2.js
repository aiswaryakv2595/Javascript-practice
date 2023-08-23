const promise = new Promise((resolve,reject)=>{
    reject()
})
promise
.then(()=>console.log('1'))
.then(()=>console.log('2'))
.catch(()=>console.log('error'))
.then(()=>console.log('3'))
.then(()=>console.log('4'))