//spread operator
// function sumfunc(...n){
//   let sum=0
//   for(let i=0;i<n.length;i++){
//     sum+=n[i]
//   }    
//   console.log(sum);

// }
// sumfunc(1,2,3,4,5,)

//using inbuilt
function sumfunc(...n){
  let result=n.reduce((acc,curr)=>acc+curr,0)
  console.log(result);

}
sumfunc(1,2,3,4,5,10,55)



//string
function palindrome(str){
  let result=str.split('').reverse()
  console.log(result);

}

palindrome("Racecar")