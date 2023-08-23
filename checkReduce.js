const arrayObj = [
    {
        name:"a",
        age:10
    },
    {
        name:"b",
        age:15
    },
    {
        name:"c",
        age:20
    }
]
const sum = arrayObj.filter(x=>x.age<20).map(x=>x.age).reduce((x,y)=>x+y,0)
console.log(sum)