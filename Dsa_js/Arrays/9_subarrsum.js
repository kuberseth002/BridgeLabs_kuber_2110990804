function subarrsum(arr,target){
  for(let i=0;i<arr.length;i++){
    let sum=0;


    for(let j=0;j<arr.length;j++){
      sum+=arr[j]

      if(sum===target){
        return arr.slice(i,j+1)
      }
    }
  }

  return []
}


const arr=[1,2,3,7,5]
const target=11
console.log(subarrsum(arr,target));
