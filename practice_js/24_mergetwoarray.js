let arr=[1,2,3,4]
let arr1=[5,6,7,8]
let combine=([...arr,...arr1])
console.log(combine);

//2nd way
function mergearr(){
  let arr2=[]
for(let i=0;i<arr.length;i++){
  arr2.push(arr[i])
}
for (let j=0;j<arr1.length;j++){
arr2.push(arr1[j])
}
console.log(arr2)
}
mergearr()
