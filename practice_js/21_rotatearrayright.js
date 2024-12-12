function rotateright(arr) {
  if (arr.length === 0) 
  return arr; 
  const newarr=arr.pop();
  arr.unshift(newarr); 
  return arr;
}

const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateright(array);
console.log(rotatedArray);