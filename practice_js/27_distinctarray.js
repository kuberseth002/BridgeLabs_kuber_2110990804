//distinct element

function distinctarr(){
  let arr1=[]
  let arr=[1,2,3,4,5,4,3,6,7,1]
  const myset=new Set();
  for(let i=0;i<arr.length;i++){
   
      myset.add(arr[i])
    
  }
  console.log(myset);
  
}
distinctarr()
