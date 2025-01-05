class Node{
  constructor(val=0,next=null){
    this.val=val;
    this.next=next
  }
}


function reverselist(head){
  let prev=null;
  let current=head;


  while(current!==null){
    let nextNode=current.next
    current.next=prev
    prev=current
    current=nextNode
  }
  return prev
}

function createlist(arr){
  let head= new Node(arr[0])
  let current=head
  for(let i=1;i<arr.length;i++){
    current.next=new Node(arr[i])
    current=current.next
  }
  return head

}

function printlist(head){
  let current=head
  while(current!==null){
    process.stdout.write(current.val+ " ");
    current=current.next
  }
  console.log();
  
}


let arr=[1,2,3,4,5]
let head=createlist(arr)
console.log("linkedlist:");
printlist(head)

let reversehead=reverselist(head)
console.log("reverse list");
printlist(reversehead)




