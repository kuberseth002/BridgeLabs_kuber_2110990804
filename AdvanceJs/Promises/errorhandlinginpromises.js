//using .catch()

const fetchdata1=()=>{
  return new promise((reolve,reject)=>{
    const success=false;
    if(success){
      resolve("data fetch successfully")
    }else{
      reject("failed to fetch data")
    }
  })
}
fetchdata1()
.then((data)=>{
  console.log(data);
}).then((error)=>{
  console.log("Error",error.message);
  
})


//using async await

const fetchdata=async()=>{
  return new promise((resolve,reject)=>{
    const success=false;
    if(success){
      resolve("data fetched successfully")
    }else{
      reject("failled to fetch")
    }
  })
}

const handlefetch=async()=>{
  try{
    const data=await fetchdata()
    console.log(data);
  }catch(error){
    console.error("error",error.message);
    
  }
};

handlefetch()
