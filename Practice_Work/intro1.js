//var:When we declare a variable using var inside a function, we canot access the variable outside the function because var is globally scoped.
// function example(){
//   var a = 10;
// }
// example();
// console.log(a);


//Reassignment and Redefinition using var
// In JavaScript, the var keyword allows variables to be both reassigned and redefined within the same scope, unlike let which only allows reassignment. This behavior of var can sometimes lead to unexpected results and bugs in code if not used carefully.

//Reassignment
// var x = 10;
// console.log(x);
// x="kuber";
// console.log(x);

// // Redefinition
// var x=10;
// console.log(x);

// var x="kuber"
// console.log(x);


//let:In JavaScript, the let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined. Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies.
// let a=10;
// if(true){
//   let y=20;
//   console.log(a);
//   console.log(y); 
// }
// console.log(a);
// console.log(y);


//Reassignment and Redefinition using let
// Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope. This helps prevent accidental redeclaration of variables and can aid in writing more predictable and maintainable code.
//Reassignment
// let x=20;
//  console.log(x);
//  x=30;
//  console.log(x);

//  Redefinition
// let x=20;   syntax error
// console.log(x);
// let x="KUBEr";
// console.log(x);


// const
// In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.
// const x = 20;
// console.log(x);     

// x = 30;
// console.log(x);


// Constants declared with const must be initialized with a value. Unlike variables declared with var or let, which can be declared without immediately assigning a value, const requires initialization at the time of declaration.
 

// let x;      // No Error

// var y;      // No Error

// const z;    // Error! "Missing initializer in const declaration"


// It's important to note that while the value assigned to a constant cannot be changed, if the value is an object or an array, its properties or elements can still be modified. This is because const only prevents reassignment of the variable itself, not its properties or elements.


const person = {
  name: 'Mayank',
  age: 21
};

console.log(person.name);    // Output: Mayank

// Modifying object properties is allowed
person.name = 'Love';
console.log(person.name);    // Output: Love

// Attempting to reassign the variable will throw an error
person = {};    // Throws TypeError: Assignment to constant variable.



const numbers = [1, 2, 3];
console.log(numbers);    // Output: [1, 2, 3]

// Modifying array elements is allowed
numbers.push(4);
console.log(numbers);    // Output: [1, 2, 3, 4]

// Attempting to reassign the variable will throw an error
numbers = []; // Throws TypeError: Assignment to constant variable.
