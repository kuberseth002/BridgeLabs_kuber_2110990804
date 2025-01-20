//module:it used for organization of code make different folder an put code in that for easy understanding and better experience

//iterface:it provide us with structure what method properties we have to use it doesnot generate new object or property

interface isperson{
  name:string
  age:number;
  speak(a:string):void
  spend(a:number):number
}

const me: isperson={
  name:'seth',
  age:30,
  speak(text:string):void{
    console.log('i spent',amount);
  },
  spend(amount:number):number{
    console.log('i spent',amount);
    return amount
  },
}

const person = (person:isperson)=>{
  console.log('hello',person.name);
}

// greetperson(me)
console.log(me);


//generics:it is allowed to use reusable block of code with different types

const adduid=<T>(obj:T)=>{  //capture all the information
  let uid=Math.floor(Math.random()*100)
  return{...obj,uid} //attach to random uid 
}
let docOne=adduid({name:'kuber',age:40})
let docTwo=adduid('hello')
console.log(docOne.name);


//with interface
interface Resource<T>{
  uid:number;
  resourceName:string
  data:T
}


const docthree:Resource<object>={
  uid :1,
  resourceName:'person',
  data:{name:'kuber'}
}

const docfour:Resource<string[]>={

  uid:2,
  resourceName:'shoppingList',
  data:['a','b','c']
}

console.log(docthree,docfour);


//Enum:-->which represent keywords constant with numeric values

enum ResourceType{BOOK,AUTHOR,FILM,DIRECTOR,PERSON}// each of these is specified with number

//tuples:these are little bit like arrays  use arrays method 
//major difference is type of data in each tuple is fixed once its initialze


let arrs = ['kuber',5,true]
arrs[0]=false
arrs[1]='kuber'
arrs=[30,false,'seth']

let tup:[string,number,boolean]=['kuuber',25,true]
tup[0]='ken';
tup[1]=30

let student:[string,number]
student=['seth',5474]
