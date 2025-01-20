//no argumnet function

let func:(a:string, b:string)=>void
  func=(name:string,greeting:string)=>{
    console.log(`${name} says ${greeting}`)
  }


  //example two

  let cal:(a:number,b:number,c:string)=>number

    cal=(numone:number,numtwo:number,action:string)=>{
      if(action==='add'){
        return numone+numtwo
      }
      else{
        return numone-numtwo
      }
    }


    //example 3
    let userdetails:(obj:{name:string,age:number})=>void
    
    type person = {name:string,age:number}

    userdetails=(obj:person)=>{
      console.log(`${obj.name} is ${obj.age} years old`);
      
    }