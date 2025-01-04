function validparentheses(s) {
  const stack = [];
  const parentheses = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  
  for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];

      if (parentheses[currentChar]) {
          stack.push(currentChar);
      } else {
          const top = stack.pop();
          if (parentheses[top] !== currentChar) {
              return false;
          }
      }
  }

  return stack.length === 0;
}

console.log(validparentheses("()"));      
console.log(validparentheses("()[]{}"));  
console.log(validparentheses("(]"));       
console.log(validparentheses("([)]"));     
console.log(validparentheses("{[]}"));    
