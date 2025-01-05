class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(x) {
    this.queue.push(x);
  }

  
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.queue.shift(); 
  }

  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log(this.queue);
  }
}

function reverseQueue(queue) {
  const stack = [];
  
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }
  
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("original queue:");
queue.print(); 

reverseQueue(queue);

console.log("reversed queue:");
queue.print(); 
