function compose(){
  let arr3=[]
  
  let arr1=[1,2,3,4,5,6]
  let arr2=[7,8,9,10,11,5,12]

  for(let i=0;i<arr1.length;i++){
   if(!arr2.includes(arr1[i])){
    arr3.push(arr1[i])
   }

  }
  for(let j=0;j<arr2.length;j++){
    if(!arr1.includes(arr2[j]))
    arr3.push(arr2[j])
  
  console.log(arr3);
  
}
}
compose()