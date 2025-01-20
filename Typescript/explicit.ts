//explicit types
let chars:string;
let log:boolean
let ages:number
ages=5
log=true

//arrays

//sign only string value
let arr:string[]
arr=['kuber','sakshi']
arr.push('55')

//union types:want mixed types

let mix:(string | number | boolean)[]=[];
mix.push('hello');
mix.push(20)
mix.push(false)
console.log(mix);

let uid:string|number
uid='123';
uid=123

//objects
let user:object
user={name:'kuber',age:32}

let user2:{
  name:string,
  age:number,
  wt:number
}

user2={name:"kuber",age:20,wt:50}


