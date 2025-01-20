let greet=()=>{
  console.log('hello world');
}
greet()

let greets:Function;

greet=()=>{
  console.log('hello again');
}
const add=(a:number,b:number , c:number | string=10)=>{  //? used as optional value
  console.log(a+b);
  console.log(c);
  
}
add(5,10,'20')

const minus=(a:number,b:number):number =>{  //:ise used to return specifically number
  return a+b
}

let result=minus(10,7)
