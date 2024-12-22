//shallow copy

 var obj1={
  name:'abc',
  address:{
    street:'Linkin road',
    city:'delhi'
  }
 }


//  var obj2 = Object.assign({},obj1)
var obj2=JSON.parse(JSON.stringify(obj1)) // not acceptable if key value is function 
// console.log(obj2);
obj2.name='def';
obj2.address.city='mumbai';
console.log(obj1.address.city);
console.log(obj2.address.city);


