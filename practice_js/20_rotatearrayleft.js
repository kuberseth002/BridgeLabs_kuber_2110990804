function rotateLeft(arr) {
  if (arr.length === 0) 
  return arr; 
  const newarr = arr.shift(); 
  arr.push(newarr);
  return arr;
}

const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateLeft(array);

console.log(rotatedArray);
