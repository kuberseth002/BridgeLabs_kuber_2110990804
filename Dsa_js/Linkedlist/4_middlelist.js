class Node{
  constructor(val=0,next=null){
    this.val=val;
    this.next=next
  }
}

function findmiddle(head){
  let slow=head;
  let fast=head;

  while(fast!==null && fast.next!==null){
    slow=slow.next
    fast=fast.next.next
  }

  return slow ? slow.val :null
}

function createlist(arr){
  let head = new Node(arr[0])
  let current=head
  for(let i=1;i<arr.length;i++){
    current.next=new Node(arr[i])
    current=current.next
  }
  return head;
}

let list = createlist([1,2,3,4,5])
console.log(findmiddle(list));
