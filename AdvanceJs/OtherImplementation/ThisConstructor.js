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
