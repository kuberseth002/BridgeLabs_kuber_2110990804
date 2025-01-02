function rotatearr(arr,k){
  k=k%arr.length;
  for(let i=0;i<k;i++){
    arr.unshift(arr.pop())
  }
  return arr
}

const arr=[1,2,3,4,5,6,7]
const k=3;
console.log(rotatearr(arr,k));
