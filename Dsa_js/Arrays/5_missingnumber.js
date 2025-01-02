function findmissing(arr){
  const n=arr.length;
  const sum=(n+1)*(n*2)/2
  const actualsum=arr.reduce((acc,num)=>acc+num,0)
  return sum-actualsum
}

const arr=[1,2,4,6,3,7,8]
console.log(findmissing(arr));
