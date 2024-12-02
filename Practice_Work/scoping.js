// //global scope: can be used any where in the whole block
// //we dont use much as give problem in debugging
// var age=14;
// console.log(age);


// {
//   console.log(age);
  
// }

// if(true){
//   console.log(age);
  
// }

// for(let i=0;i<2;i++){
//   console.log(age);
// }

// function hello() {
//   console.log("hi ",age);
// }
// hello()



//function scoping 

// function sayhello(){
//   var name="kuber";
//   console.log("hello dunia",name)
//   console.log(name);
  
// }
// // console.log(name);

// sayhello();


//block scope

{
  const age=10;
}
console.log(age);



console.log(height);

{
  var height=180;
}
console.log(height);

//temporaldead zone

console.log(marks);     // we cannot access 
console.log("babbar"); //marks value from 
console.log("kuber")  //here because it is dead zone
const marks=100;     //
console.log(marks);


// avoid global scope : because there is no issue in debugging productivity increase and predeictablity remain same
