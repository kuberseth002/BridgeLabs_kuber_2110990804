function productarr(nums) {
  const tp = nums.reduce((acc, num) => acc * num, 1);
  return nums.map(num => tp / num);
}

const nums = [1, 2, 3, 4];
console.log(productarr(nums)); 
