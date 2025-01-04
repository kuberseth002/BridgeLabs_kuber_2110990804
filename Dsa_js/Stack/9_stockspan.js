function calculateSpan(prices) {
  const stack = []; 
  const span = []; 

  for (let i = 0; i < prices.length; i++) {
      while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
          stack.pop();  
      }

      if (stack.length === 0) {
          span[i] = i + 1;
      } else {
          span[i] = i - stack[stack.length - 1];
      }

      stack.push(i);
  }

  return span;
}

const prices = [100, 80, 60, 70, 60, 75, 85];
const result = calculateSpan(prices);
console.log(result);  
