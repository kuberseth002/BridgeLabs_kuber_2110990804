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
