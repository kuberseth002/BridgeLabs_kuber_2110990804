// function largestsum(){
//   let sum=0
//   let max= 0

//   let arr=[-2, -3, 4, -1, -2, 1, 5, -3]
//   for(let i = 0;i<arr.length;i++){
//     sum+=arr[i]
//     if(sum>max){
//       max=sum;
//     }
//     if(sum<0){
//       sum=0
//     }
//   }
//   console.log(max);
   
// }
// largestsum()


//using reduce method

function largestarr(arr){
  let max=arr[0];
  let sum=arr[0];

  arr.reduce((_,value)=>{
    sum=Math.max(value,sum+value);
    max=Math.max(max,sum)
  },0)
  return max
}
let arr=[-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestarr(arr));



