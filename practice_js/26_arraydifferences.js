function arraydifferences(){
let arr3=[]

  let arr=[1,2,3,4]
  let arr1=[4,5,6,7,8]

  for(let i=0;i<arr.length;i++){
    if(!arr1.includes(arr[i]))
      arr3.push(arr[i])
  }
  console.log(arr3);
  
}
arraydifferences()