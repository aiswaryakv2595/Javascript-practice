// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
//   const myCar = new Car("Ford", 2014);
//   console.log(myCar);
// //Spread Operator
// let globalPlayer1=["Raju","Radha"]
// let globalPlayer2=["Alexa","siri"]
// let player1 = [...globalPlayer1,"Ramu"]
// console.log(player1);

// // destructuring
// const globalPlayer1={
//   id:0,
//   names:'Ajay',
//   age:20
// };
// const {id,names,age}=globalPlayer1;
// console.log(names);
//find

// const obj1=[{
//   state:'kollam',
//   id:1
// },
// {
//   state:'kollam',
//   id:2
// },
// {
//   state:'tvm',
//   id:2
// }];
// let states=obj1.find(ele=>ele.state==='kollam');
// console.log(states);

// let array =[1,2,3,4,5];

// let sum = array.reduce((total,value)=>total+=value)
// console.log(sum);
const user=[{
  fistName:'hari',
  secondName:'Doe',
  age:20
},
{
  fistName:'sudha',
  secondName:'John',
  age:21
},
{
  fistName:'akhilesh',
  secondName:'thrissur',
  age:25
},
{
  fistName:'sandra',
  secondName:'Hari',
  age:30
}];
const val = user.filter((x)=>x.age<30).map(x=>x.fistName);
console.log(val);
