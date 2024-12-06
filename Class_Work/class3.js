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





