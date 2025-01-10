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



