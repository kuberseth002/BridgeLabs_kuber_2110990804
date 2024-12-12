let arr = [64, 25, 12, 22, 11];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {

  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      swapped = true;
    }
  }
}

console.log(arr); 



