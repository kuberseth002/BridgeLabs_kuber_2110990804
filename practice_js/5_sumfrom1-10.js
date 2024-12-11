// sum from 1-10

let sum=0
for(let i=1;i<=10;i++){
  sum+=i
  console.log(`sum ${i}:${sum}`);
  
}


//using reduce method

let arr=[1,2,3,4,5,6,7,8,9,10];

let result = arr.reduce((acc,curr)=>acc+curr,0)
console.log(result);


