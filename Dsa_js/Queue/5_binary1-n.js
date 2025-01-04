function binarynumbers(N) {
  const queue = [];
  const result = [];

  queue.push('1');

  for (let i = 1; i <= N; i++) {
    const current = queue.shift();

    result.push(current);

    queue.push(current + '0');
    queue.push(current + '1');
  }

  return result;
}

const N = 10;
console.log(binarynumbers(N)); 
