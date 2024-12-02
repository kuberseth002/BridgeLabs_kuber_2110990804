// // //functions:block of code to perform specific task

// // //function define
// // //1.
// // function funName(){    //()->parameters
// //   console.log("kuber");
// // }

// // //function call-use
// // funName();


// // //2.
// // function printcoutn(){
// //   for(let i = 1;i<=100;i++){
// //     console.log(i);
// //   }
// // }
// // printcoutn();

// // //3. parameter pass inside
// // function printnumber(num){//->parameter
// //   console.log("printing number:",num); 
// // }
// // printnumber(55);//->argument


// // //4.passing multiple parameters

// // function getavg(num1,num2){
// //   let avg=(num1+num2)/2
// //   console.log("average:",avg);
// // }

// // getavg(7,7)


// // //return function
// // //5.
// // function getsum(a,b,c){
// //   let sum=a+b+c;
// //   return sum  // it is a keyword jo return krta h fucntion jisne fun call kiya

// // }
// // let ans=getsum(1,2,3)
// // console.log(ans);

// // //6.parameter passing
// // function getmyname(firstname,lastname){
// //   let fullname=firstname+lastname
// //   return fullname;
// //   //unreachable statement after return 
// // }
// // let ans1=getmyname("kuber","seth");
// // console.log(ans1);

// // //7.same as 8
// // function getmultipilcation(a,b){
// //   return a*b;
// // }
// // let result = getmultipilcation(2,10);
// // console.log(result);

// // //8.function declaration
// // let multiply=function(a,b){
// //   return a*b;
// // }
// // let res=multiply(2,20);
// // console.log(res);

// // // 9.function expression
// // let sqaurenumber=function(num){
// //   let ans=num**2;
// //   return ans;
// // }
// // let r1=sqaurenumber(6);
// // console.log(r1);

// // // Arrow Functions
// // // Introduced in ES6, arrow functions provide a concise syntax for writing functions, especially for short, anonymous functions.
// // //1.
// // function getexp(x,y){
// //   let ans=x**y;
// //   return ans;
// // }
// // console.log(getexp(2,10));

// // //function expression 2.
// // let getexp1=function(x,y){
// //   let ans=x**y;
// //   return ans;
// // }
// // console.log(getexp1(2,10));

// // // 3. arrow function

// // let getexp2=(x,y)=>{
// //   let ans=x**y;
// //   return ans;
// // }
// // console.log(getexp2(2,10));




// //Arrays and concept:-An array in JavaScript is a special type of object that stores a collection of elements. These elements can be of any data type, including numbers, strings, objects, or even other arrays. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size dynamically as elements are added or removed.
//   let obj={
//     name:"kuber",
//     age:25,
//     weight:84,
//     height:"6ft lin",
//     // "full name":"seth"
//     greet:function(){
//       console.log("hello ji ki hal chal")
//     },
//     hello:function(){
//       console.log("hello dunia");
    
//   }
// }
//we can iterate on properties
// for(let key in obj){
//   console.log(key,"",obj[key]);

// }
//  console.log(obj);
//   obj.greet()
//   obj.hello()


// //creation of arrays
// let arr=[1,2,3,4,5];
// console.log(typeof(arr));
// //array constructor
// let brr=new Array('love',1,true);
// console.log(brr);

// // console.log(typeof(brr));
// // console.log(brr[0]);


// // arrays built in methods
// // push:insert at end
// brr.push('babbar')
// console.log(brr);
// // pop
// brr.pop("babbar");
// console.log(brr);
// // shift:- remove first item
// brr.shift("seth");
// console.log(brr);
// // unshift:add first item
// brr.unshift("kuber")
// console.log(brr);
// // slice:take new part from array shallow copy
// brr.push(20);
// brr.push(30);
// brr.push(40);
// brr.push(50);
// brr.push(60);
// console.log(brr);
// console.log(brr.slice(2,4))  //2 is starting index and 4 is ending index h
// console.log(brr);

// // splice:-array content can be changed insert repalce remove at any place
// brr.splice(2,5,'seth')
// console.log(brr);

 // map:existing function/set of values to process from function

 // let arr=[10,20,30]
// let ans=arr.map((number,index)=>{
//   console.log(number+1);
//   console.log(index);
  
//   return number*number;
// })
// console.log(ans);

// filter

// let arr=[10,20,30,41,25,4]
// let result=arr.filter((numbers)=>{
//   return numbers%2===0
//    if(numbers%2!=0){
//      return true
//    }
//    else{
//      return false
//    }
// })
// console.log(result);

// let arr=[1,2,'kuber','seth'];
// let res=arr.filter((value)=>{
//   // return typeof(value)==='string'

//   if(typeof(value)=== 'number'){
//     return true
//   }
//   else{
//     return false
//   }

// })
// console.log(res);

// reduce:to solve complex mathematical operations to get single output value
// let arr=[10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//   return acc+curr;
// },0)

// console.log(ans);

//sort
// let arr=[9,1,7,4,2,8]

//ascending order
// arr.sort()
// console.log(arr);


//descending order
// arr.sort((a,b)=>b-a)
// console.log(arr);


// indexof
// console.log(arr.indexOf(9))

// find
// let products = [
//   { id: 101, name: "Laptop" },
//   { id: 102, name: "Tablet" },
//   { id: 103, name: "Phone" }
// ];

// let product = products.find((item) => item.id === 102);
// console.log(product); // Output: { id: 102, name: "Tablet" }







  

// let arr1=[10,20,30];


// // //length find
// // let length = arr1.length
// // console.log("length",length);

// // for(let index=0;index<length;index++){
// //   console.log(arr1[index]);
  
// // }

//for each

// arr1.forEach((value,index)=>{
// console.log("number", value,"index",index);
// })


// for of
// let arr1=[10,20,30,40]
// for(let value of arr1){
//   console.log(value);
  
// }

// let fname="kuber";
// for(let val of fname){
//   console.log(val);
  
// }

//Arrays with functions
// let arr1 = [10,20,30,40,50]

// function getsum(arr){
//   // let length=arr.length
//   let sum=0
//   // for(let i=0;i<length;i++){
//   //   sum=sum+arr[i];

//  //   }
//  //   return sum

//  arr.forEach((value)=>{
//   sum=sum+value

//  })
//  return sum
// }

// let totalsum=getsum(arr)
// console.log(totalsum);









