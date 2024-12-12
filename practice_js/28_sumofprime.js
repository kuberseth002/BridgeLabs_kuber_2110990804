function isPrime(num) {
  if (num <= 1) 
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) 
      return false;
  }
  return true;
}

function sumOfFirst100Primes() {
  let prime = [];
  let sum = 0;
  let num = 2; 

  while (prime.length < 100) {
    if (isPrime(num)) {
      prime.push(num);
      sum += num;
    }
    num++;
  }

  return { sum, prime };
}

const result = sumOfFirst100Primes();
console.log(result.sum);
console.log(result.prime);
