
type StringOrNum = string | number
type objwithname = {name:string,uid:StringOrNum}

 const details=(uid:string| number, item: string)=>{
  console.log(`${item} has a uid of ${uid}`);
 }

 const gret=(user:objwithname)=>{
  console.log(`${user.name} says hello`);
}

const grets=(user:objwithname)=>{
  console.log(`${user.name} says hello`);
 }
 
 
 