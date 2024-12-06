// type conversion 

//string to number
const str="42";
const  num = Number(str)
console.log(num);
console.log(typeof(num));


//number to string
const number=100
const str2=String(number)
console.log(str2);
console.log(typeof(str2));


//strict mode: used to prevent certain problematic behaviours

// function myfunc(){
//   'use strict'
//   let a=10
//  b=20
//   console.log(a);
//   console.log(b);
// }
//  myfunc()






 //oops concepts

 //class: blueprint for creating object
 // object: an instance of a class


// class student{

//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }

//   introduce(){
//     return `Hi i am ${this.name}, and i am ${this.age} years old`
//   }
// }

// const student1 = new student("kuber",25);
// const student2 = new student("Abhi",66)

// console.log(student1.introduce());
// console.log(student2.introduce());



// //encapsulation:restricting direct access to an object data
// // we can achieve this in js using closure and private field


// class BankAccount{
//   #balance;

//   constructor(accountholder,initialbalance){
//     this.accountholder=accountholder;
//     this.#balance=initialbalance

//   }


//   getbalance(){
//     return `Balance for ${this.accountholder}: ${this.#balance}`
//   }
//   deposit(amount){
//     this.#balance+=amount

//   }
  

// }
// const account = new BankAccount("Kuber",5000);
// account.deposit(2000)
// console.log(account.getbalance());


// converting to string 

string()
console.log(String("123"));

//.tostring()
console.log((true).toString());

//concatenation
console.log(true+"is Boolean");

// //converting to number
// console.log(parseInt("123abc"));
// //float
// console.log(parseFloat("12.34abc"));
//+ coercion
// console.log(+"abc");
//boolean
// console.log(Boolean("hello"));
// console.log(Boolean(1));

//object
// console.log(Object(123));
// console.log(Object("123"));

//stringfy:convert arrays object into string
// const obj={name:"kuber",age:25};
// console.log(JSON.stringify(obj));

// const arr=[1,2,3]
// console.log(JSON.stringify(arr));


//json.parse:- convert json string to object

const jsonstrin={"name":"Alice",age:"25"}
const obj1 = JSON.parse(jsonstrin)
console.log(obj1);













