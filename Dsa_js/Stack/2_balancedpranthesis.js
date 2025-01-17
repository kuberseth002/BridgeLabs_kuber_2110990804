function isBalancedParentheses(s) {
  const stack = [];
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


console.log(isBalancedParentheses("()")); 
console.log(isBalancedParentheses("()[]{}")); 
console.log(isBalancedParentheses("(]")); 
console.log(isBalancedParentheses("([)]")); 
console.log(isBalancedParentheses("{[]}")); 
