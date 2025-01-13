let promise=new Promise((resolve,reject)=>{
  let success=true;
  if(success){
    resolve("promise fulfilled")
  }else{
    reject("promise rejected")
  }
});

promise.then((message)=>{
  console.log("First msg:"+message);
  return "promise fullfilled second message"
}).then((message)=>{
  console.log("Second message:" +message);
  return "promise fullfilled second message"
}).then((message)=>{
  console.log("third msg:"+message);
  return "promise return third message"
}).catch((error)=>{
  console.log("internal error" +error);
});