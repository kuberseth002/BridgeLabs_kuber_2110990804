function maxproduct3(arr){
  arr.sort((a,b)=>a-b);

  const n = arr.length

  return Math.max(
    arr[n-1] * arr[n-2] * arr[n-3],
    arr[0] * arr[1] * arr[n-1]
  )
}

const arr=[-10,-10,5,2,3,7]
console.log(maxproduct3(arr));
