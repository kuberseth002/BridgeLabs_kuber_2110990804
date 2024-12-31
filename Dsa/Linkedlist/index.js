//singly list 
class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}


//doubly linked list

class Node{
  constructor(data){
    this.data=data;
    this.prev=null;
    this.next=null
  }
}


//circular linked list

class Node{
  constructor(data){
    this.data=data;
    this.next=null;

  }
}

let first=new Node(2);
let mid=new Node(3);
let last=new Node(4);

first.next=second;
second.next=last;
last.next=first;