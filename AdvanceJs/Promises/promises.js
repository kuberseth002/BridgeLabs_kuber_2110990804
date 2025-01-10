//promises is a object:tell about how we can handle async code in clean manner
//it is used to check the state wheather it is pending rejected or fulfilled and handlig its returnig state
// this lets asyscyhronous method return value like synchoronous method

//sychronous code: return its value immediatley
//asyc code: it will also return the value as it is also not completed yet get value in future

// new Promise((resolve,reject))


//sync code
// let firstpromise= new Promise((reslove,reject)=>{
//   console.log("Kuber");
//   // reslove(1000)
//  // reject(new Error("internal server  error"))
  
// })


//async code

// function sayname(){
//   console.log("my name is kuber"); 
// }
// setTimeout(sayname,10000);


// //another way to write
// setTimeout(function sayname(){
//   console.log("my name is kuber"); 
// },10000);


// let firstpromises= new Promise((reslove,reject)=>{
//   console.log("Kuber");
//   // reslove(1000)
//  // reject(new Error("internal server  error"))

//  setTimeout(function sayname(){
//   console.log("my name is kuber"); 
//   },10000);
//   reslove (1)
// })


//then and catch

let promise=new Promise((resolve,reject)=>{
  let success=false
  if(success){
    console.log("Promise fulfilled")
  }
  else{
    console.log("Internal server error");
  }
})
// multiple then blocks we can use
promise.then((message)=>{
  console.log("Message is" +message);
}).catch((error)=>{
  console.log("Error: "+ error);
})