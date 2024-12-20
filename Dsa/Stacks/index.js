// //methods in stack

// //push:used to add element to top of stack

// push(element)
// {
//   //push elements into items
//   this.items.push(element)
// }
// push()


// //pop:-remove element from the stack 
// pop()
// {
// //returns top most element in the stack,and removes it from the stack it underflow it stack is empty

// if(this.items.length==0)
//   return 'underflow'
//  return this.items.pop()
// }

// //peek():return the top most element in the stack but doesnot delete it

// peek()
// {
//   //return top most element from the stack but doesnot delete it

//   return this.items[this.items.length-1];
// }

// //isEmpty()
// {
//   //return true if stack isEmpty
//   return this.items.length==0
// }



// //printstack()->this method return string in which all the elements of an stack is concatenated

// printStack(){
//   let str=""
//   for(let i=0;i<this.items.length;i++){
//     str+=this.items[i]+" ";
//     return str
//   }
// }


//stack using array

// class Stack{
//   constructor() {
//     this.stack=[]
//   }


//   //adding element in stack

//   push(element){
//     this.stack.push(element)
//   }

//   //remove and return top of stack

//   pop(){
//     if(this.isEmpty()){
//       throw new Error("Stack underflow")
//     }
//     return this.stack.pop()
//   }
//   //get top element

//   peek(){
//     if(this.isEmpty()){
//       throw new Error("Stack is empty")
//     }
//     return this.stack[this.stack.length-1]
//   }
//   isEmpty(){
//     return this.stack.length===0
//   }

//   //size of stack

//   size(){
//     return this.stack.length
//   }

//   //display elements

//   display(){
//     return this.stack
//   }
// }



// const stack = new Stack()
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack.display());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());

///stack using linked list

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}


class Stack{
  constructor(){
    this.top=null;    //point to top of the stack
    this.size=0;
  }


  push(element) {
  const newNode=new Node(element)
  newNode.next=this.top;
  this.top=newNode;
  this.size++;
}

pop(){
  if(this.isEmpty()){
    throw new Error("Stack  underflow")
  }
  const value = this.top.value;
  this.top = this.top.next;
  this.size--;
  return value
}
peek(){
  if(this.isEmpty()){
    throw new Error("Stack is empty")
  }
  return this.top.value
}

  isEmpty(){
    return this.top===null;
  }
  getSize(){
    return this.size;
  }


  display(){
    let current=this.top;
    const elements=[];
    while(current){
      elements.push(current.value);
      current=current.next
    }
    return elements;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.display());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.getSize());



//using objects

class Stack{
  constructor(){
    this.stack={}
    this.top=-1
  }

  push(element){
    this.top++;
    this.stack[this.top]=element
  }

  pop(){
    if(this.isEmpty()){
      throw new Error("stack underflow")
    }

    const value = this.stack[this.top];
    delete this.stack[this.top];
    this.top--;
    return value;
  }
  peek(){
    if(this.isEmpty()){
      throw new Error("Stack is empty")
    }
    return this.stack(this.top)
  }

  isEmpty(){
    return this.top===-1;
  }

  size(){
    return this.top+1;
  }
  size(){
    return this.top+1;
  }

  display(){
    const elements=[];
    for(let i =0;i<=this.top;i++){
      elements.push(this.stack[i]);
    }
    return elements;
  }
}

const stacks = new Stack();
stacks.push(10);
stacks.push(20);
stacks.push(30);
console.log(stacks.display());
console.log(stacks.pop());
console.log(stacks.peek());
console.log(stacks.size());




