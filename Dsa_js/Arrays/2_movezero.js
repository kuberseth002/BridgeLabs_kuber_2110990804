function movezero(arr){
  let idx=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[idx]=arr[i]
      idx++;
    }
  }


  while(idx<arr.length){
    arr[idx]=0
    idx++;
  }
  return arr

}


const arr=[0,1,0,3,12]
console.log(movezero(arr));


// using filter


function zeroend(arr){
  const a=arr.filter(num=>num!==0);
  const z=arr.filter(num=>num === 0);
  return [...a,...z]
}

const arr1=[0,1,0,,12]
console.log(zeroend(arr));
