//Event loop:mechanism that handles asynchoronous operations like set time out and promises

console.log("Hi");

setTimeout(function timeout(){
  console.log("kuber seth");
},5000)

console.log("End");


//interactions

// const name=("What is your name?")
// alert(`Hello,${name}!`)
// const isAdult = confirm("Are you 18+?")
// console.log(isAdult);


//...spread and rest operators

function sum(...numbers){
  return numbers.reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3));
const arr = [1,2,3]
console.log(...arr);

//condotional branching 
const age=18

if(age>=18){
  console.log("Adult");
}else{
  console.log("Minor"); 
}


//recursion

function fact(n){
  return n===1? 1:n*fact(n-1)
}
console.log(fact(5));



//promises
// let firstpromise=new Promise((resolve,reject)=>{
//   setTimeout(function saymyname(){
//     console.log("my name is kuber");
//   },15000)
//   console.log(resolve(1));
   
// })



let promise = new Promise((resolve,reject)=>{
  let success=true;
  if(success){
    resolve(10)
  }else{
    reject(-1)
  }
})
promise.then((message)=>{
  console.log("first msg:"+message);
  return 20
}).then((message)=>{
  console.log("second message:"+message);
  return 30
}).then((message)=>{
  console.log("third message:"+message);
  
})



