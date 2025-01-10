//class:it is a bueprint for creating objects it encapsulate data and behaviour
//feture: constructor method: intialize object property , methods:function inside a class, inheritance: inherit properties from another class

class Animal{
  constructor(name,sound){
    this.name=name;
    this.sound=sound
  }
  makesound(){
    console.log(`${this.name} says ${this.sound}`);
    
  }
}

const dog = new Animal("dog", "woof")
dog.makesound();



//inheritance

class bird extends Animal{
  fly(){
  console.log(`${this.name} is flying`);
  }
}

const parrot=new bird("parrot", "chrip")
parrot.makesound()
parrot.fly()





//object reference and copying: in this objects are stored in heap memory and hold refernce to memory location
//copying and objet doesnot create new object but it copie the reference

const obj1={name:"alice"}
const obj2=obj1

obj2.name="bob"
console.log(obj1.name);  //because obj1 and obj2 point to same object



//deep copy:-copy only the top level object 
// if object contain nested object they are still referenced


// shallow copy
const original={name:"john",details:{age:30}}
const copy={...original}  //shalow copy

copy.name="alice"
copy.details.age=25;


console.log(original.name);
console.log(original.details.age);//nested obj is shared


//deep copy

const obj={name:"john",details:{age:30}}
const deepcopy=JSON.parse(JSON.stringify(obj))

deepcopy.details.age=25

console.log(original.details.age);// no referenced is shared


// garbage collector:it automatically manages the memory by removing object that are no longer accessible called gc

let objs={name:"kedar"};
objs=null  
//here the above object become unreachable and is garbage collected





// objects  methods 

//object.keys():return  array of an object keys

const object={a:1,b:2}
console.log(Object.keys(object));

//object.values():return array of object value
console.log(Object.values(object));

//object.entries():return array key value pair
console.log(Object.entries(object));

//object.assign():used for shalow copying
const copys=Object.assign({},object);
console.log(copys);

//Object.freeze:-make object imuatable
Object.freeze(object)
object.a=10 //cannot modify freeze object


//property flags and descriptor: they hav attribute like
//  writable:can the value be changed
// enumerable:looped over
// configureable: peroperty be deleted or changed

const abc={}
Object.defineProperty(obj,"name",{
  value:"alice",
  writable:false,   // cannot change the value
  enumerable:true, // can loop over
  configurable:false, //cannot delete the property
});

console.log(obj.name);
obj.name="bob"  // cannot assign to this read only property

//object to primitive conversion:when an object is used in string or mathematical operation js tries to convert into a primitve


const cde={
  valueOf(){
    return 42;
  },
  toString(){
    return "Object"
  }
};

console.log(cde+2); //44
console.log(String(cde));




//optional chaining
const user={address:{city:"paris"}}

console.log(user?.address?.city);
console.log(user?.contact?.phone);




//this keyowrd:it refers to object that is currently executing the code its value depend on context
/*1.this refers to global object in global context
2.inside a function:same refers to global object non strict mode
3. strict mode function: this is undefined
4.object refer to object itself
5.class:--> current instance of class
6.arrow function:-doesnot have this inherit from lexical scope
*/

//constructor :a special function in classes used  to initialize and object properties automatically called when new instance of a class is created
//parameterized constructor
class Dog{
  constructor(name){
    this.name=name
  }
}
const mydog=new dog("buddy")
console.log(mydog.name);



//hoisting:-it is a mechanism where variable declaration and function declaration are moved to top of their scope before code execution
//only the declaration are hoisted not the initialzation


//function hoisting

greet()
function greet(){
  console.log("Hello world");
}

//variable hoisting variable are declared with var are hoisted but there intial is not
//let and const are also hoisted but they are in temporal dead zone untill the code reaches the destination
console.log(x);// undefined
var x=5;
console.log(x); //5


//let and const
console.log(y); // it can not be accessed before its declaration due to the tdz
let y=10;


//class hoisting: class in js not hoisted must declare before using it

const obj = new Myclass()
class Myclass{
  constructor() {
    this.name="Test";
  }
}











