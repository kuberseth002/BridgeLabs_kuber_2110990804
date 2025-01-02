class Node{
  constructor(val=0,next=null){
    this.val=val;
    this.next=next
  }
}


function mergetwolist(list1,list2){
  let list=new Node();
  let current=list


 //traverse both list and merge
 while (list1!==null && list2!==null) {
  if(list1.val<list2.val){
    current.next=list1
    list1=list1.next
  }else{
     current.next=list2
     list2=list2.next
  }
  current=current.next
}

if(list1!==null){
  current.next=list1
}
if(list2 !== null){
  current.next=list2
}

return list.next
}


function createlist(arr){
  let head=new Node(arr[0]);
  let current=head;

  for(let i=1;i<arr.length;i++){
    current.next=new Node(arr[i])
    current=current.next
  }
  return head;
}


function printlist(head){
  let current=head;
  while(current!==null){
    process.stdout.write( "->")
    current=current.next
  }
  console.log("null");
  
}

let list1=createlist([1,3,5,7])
let list2=createlist([2,4,6,8])

console.log("list1:");
printlist(list1)


console.log("list2:");
printlist(list2)

let merge=mergetwolist(list1,list2)
console.log("merge list:");
printlist(mergetwolist)
