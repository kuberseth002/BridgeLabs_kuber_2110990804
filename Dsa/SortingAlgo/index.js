// function bubblesort(arr){
//   let swapped
//   do{
//     swapped=false
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//         swapped=true
//       }
//     }
//   }
//   while(swapped)  
// }

// const arr=[8,20,-2,4,-6]
// bubblesort(arr)
// console.log(arr);




//merge sort

//1. divide it in two parts
//[29,10,8,16,37,14,45,4]
//[8,10,16,29] [4,14,37,45]
//then merge
//[4,8,10,14,16,29,37,45]//O(n)


const mergesort=(arr)=>{
  if(arr.length<2){
    return arr
  }
  let mid=Math.floor(arr.length/2);
  let left=mergesort(arr.slice(0,mid))
  let right=mergesort(arr.slice(mid))
  return mergesort(left,right)
}


const merge = (left,right)=>{
  const result=[]
  let leftindex=0,rightIndex=0;
  while(leftindex<left.length && rightIndex<right.length){
    if(left[leftindex]<right[rightIndex]){
      result.push(left[leftindex])
      leftindex++
    }else{
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  while(leftindex<left.length){
    result.push(left[leftindex])
    leftindex++;
  }

  while(rightIndex<right.length){
    result.push(right[rightIndex])
    rightIndex++
  }

  return result;
}

const arr1=[29,10,8,16,37,14,4,45]
console.log(mergesort(arr1));
