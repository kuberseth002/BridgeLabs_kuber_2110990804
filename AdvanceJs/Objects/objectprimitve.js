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