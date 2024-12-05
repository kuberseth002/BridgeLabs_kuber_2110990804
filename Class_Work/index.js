// methods practice with example

//for each:it is used to iterate over elements of array and execute a provided function once for each element
const fruits=["apple","mango","banana"]
fruits.forEach((fruit,index)=>{
  console.log(`index:${index},fruit:${fruit}`);
  
});
//use case:perform side effects like logging or modifying external variables doesnot return a new array or value


//filter:-creates new array with new elements that pass in the provided function
const  number=[1,2,3,4,5];
const evennumber=number.filter(num=>num%2==0);
console.log(evennumber);

//use case: select subset of array based on condtion and returns new array without modifying the original


//reduce:-it is a function which executes on each element of the array result in single output
const numbers=[1,2,3,4,5];
const sum=numbers.reduce((accumulator,current)=>accumulator*current,0);
console.log(sum);

// usecase:-it aggregates the value ex adding,multiplying,subtracting and takes optional initial value


//map:-creates a new  array populated with results applyig function to each element of original array
const arr=[1,2,3,4,5];
const squarenum=arr.map(num=>num*num)
console.log(squarenum);

//use case:transform each element of array and returns new arrays of the same length as the orignal


//Set:collection of new elements no duplicate is allowed 
const num=new Set();
num.add(1);
num.add(2);
num.add(1);
num.add(4);
num.add(6);
console.log(num);
//usecase:-store unique values and can iterate for of and foreach


//Weakset:it is similar to set but contain only objects and enteries are weekely referenced

let obj={name:"kuber"};
let obj1={name:"seth"}

let Weakset = new WeakSet()
Weakset.add(obj)
Weakset.add(obj1)

console.log(Weakset.has(obj1));
//usecase:-cannot store primitive data like number string and enteries in these are garbage collected if they are not refernced

//MAP:-it is a collection of key value pair where keys can be of any datatype

const map = new Map()
map.set("name","Alice")
map.set("Age",25)
console.log(map.get("name"));
console.log(map.has("age"));
//usecase:-store key value pair with any data type as the key preserves order of insertion

// weakMap:-similar to map but keys must be object and they are weekely refenced

const obj2 ={name:"kuber"}
const weakMap=new WeakMap()
weakMap.set(obj2,"Engineer")
console.log(weakMap.get(obj2));

//use case:-keys are garbage collector no other refernce is exist cannot iterate over its entries
