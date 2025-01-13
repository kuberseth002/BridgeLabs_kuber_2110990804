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


//deep copy:-creates completelt independent copy 

const obj={name:"john",details:{age:30}}
const deepcopy=JSON.parse(JSON.stringify(obj))

deepcopy.details.age=25

console.log(original.details.age);// no referenced is shared
