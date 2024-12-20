 //static queue:-uses fixed size array to fix 
//dis:cannot grow beyond preffered size

    class Queues{
    constructor(){
      this.items={};
     this.front=0;
     this.rear=0;
   }

   enqueue(element){
     this.items[this.rear]=element;
     this.rear++
   }

   dequeue(){
     const item = this.items[this.front];
     delete this.items[this.front];
     this.front++;
     return item;
   }

   isEmpty(){
     return this.rear - this.front===0;
   }
   peek(){
     return this.items[this.front]
   }

   size(){
    return this.rear-this.front
   }

   print(){
    console.log(this.items);
    
   }
 }
 const queues=new Queues(5);
 console.log(queue.isEmpty());
 
 queue.enqueue(10);
 queue.enqueue(20);
 console.log(queue.size());
 queue.print()
 console.log(queue.dequeue());
 console.log(queue.peek());
 



//another implemntation

class Queue{
  constructor(){
    this.items=[]
  }

  enqueue(element){
    this.items.push(element)
  }

  dequeue(){
    return this.items.shift()
  }

  isEmpty(){
    return this.items.length===0;
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[0];
    }
    return null;
  }
  size(){
    return this.items.length();
  }
  print(){
    console.log(this.items.toString());
    
  }
}

const queue=new Queue()
console.log(queue.isEmpty());

queue.enqueue(11);
queue.enqueue(15);
queue.enqueue(44);
console.log(queue.dequeue());
console.log(queue.peek());


