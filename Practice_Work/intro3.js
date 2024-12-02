//call stack and hoisting:before declaration we are calling a function accessing

// console.log(a);
// var a=20;

// {
// SayMyName()
// function SayMyName(){
//   console.log("kuber");
  
// }
// }  


// console.log(age);

// let age = 25;
// and const it cannot be accessed but in var it can be


//normal function it will work but function expression it will give reference errror
// sayhello();
// let sayhello=function(){
//   console.log("hello world");
  
// }


//hoisting on class :it is also not possible only possible using var keyword and using function declaration
// const object=new humman()
// class humman{

// }



//function call stack:using lifo order use to store data 

// function greatme(greet,fullname){
//   console.log("hello",fullname);
//   greet()
  
// }

//  function greet(){
//   console.log("greeting of the day");
  
// }
// greatme(greet,"kuber")




//return fucntion 


// function solve(number){
//   return function(number){
//     return number*number
//   }
// }
// let ans=solve(5)
// let finalans=ans(10)
// console.log(finalans);




//storing in data structure

// const arr=[
//   function(a,b){
//     return a+b;
//   },

//   function(a,b){
//     return a*b;    //0 index
//   },

//   function(a,b){
//     return a-b;     //1 index
//   }, 

//   function(a,b){
//     return a/b;
//   }                 //2 index
// ]

// let res = arr[3]
// let ans = res(5,10)

// console.log(ans);



//used in object : conncection of key value pairs
//create as property of object
// let obj={
//   age:25,
//   wt:36,
//   ht:180,
//   greet:()=>{
//     console.log("hello world!");
//   }
  
// }
// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.wt);
// obj.greet()


// console.log(greet);
// let greet = function(){
//   console.log("hello dunia");

// }



