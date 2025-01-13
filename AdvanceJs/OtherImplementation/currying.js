//currying:-

//1st way without currying
// function add(a,b,c){
//   return a+b+c;
// }

// let res=add(12,5,6)
// console.log(res);


//2nd way with currying 

function addition(a){
  return function(b){    // in this we have use the concept of closure , here what is stored in lexical scope cannot be deleted
    return function(c){
      return a+b+c
    }
  }
}
let res=addition(2)(4)(6);
console.log(res);

//using object

userObj={
  name:"kuber",
  age:28
}

function userInfo(obj){
  return function(userInfo){
    return obj[userInfo]
  }
}

let result=userInfo(userObj)
console.log(result('age'));
