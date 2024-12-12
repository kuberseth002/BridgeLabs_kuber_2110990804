function maxarr(){
  let max=0
  let arr=[
    [1,2,3],
    [4,5,6],
    [7,10,8]
  ]
  for(let i = 0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]>max){
        
        max=arr[i][j]
      }

    }
    
   
  }
  console.log(max);
  
  
}
maxarr()