function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    sum += digit; 
    number = Math.floor(number / 10);
  }
  return sum;
}
const num = 12345;
console.log(`The sum of digits of ${num} is ${sumOfDigits(num)}.`);



// second way

function sumOfDigits(number) {
  const digits = number.toString().split('');
  return digits.reduce((sum, digit) => sum + Number(digit), 0);
}


const num1 = 12345;
console.log(`The sum of digits of ${num} is ${sumOfDigits(num)}.`);
