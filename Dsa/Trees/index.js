//inorder: left root right

class Node{
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}


function inorder(node){
  if(node == null)
    return;
  
  inorder(node.left)

  console.log(node.left);

  inorder(node.right)
}

root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);

inorder(root);

//preorder:root->left->right

class Node{
  constructor(data)
  {
    this.data=data;
    this.left=null;
    this.right=null
  }
}

function preorder(node){
  if(node==null);
  return;



  console.log(node.data+" ");

  preorder(node.left)


  preorder(node.right);

}

const root = new Node(1)
root.left=new Node(2);
root.right=new node(3)
root.left.left=new node(4)
root.left.right=new node(5)
preorder(root)


//post order:-left right root

class Node{
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null
  }
}

function postoder(){
if(node==null)
  return

postoder(node.left);

postoder(node.right);

console.log(node.data);

}

const root = new Node(1);
root.left=new Node(2);
root.left.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);
postoder(root)




//bst -binary search tree

class tree{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}


class bt{
  constructor(){
    this.root=null
  }

  insert(value){
    const newNode = newTree(value);
    if(!this.root){
      this.root=newNode
    }else{
      this.insert(this.root,newNode);
    }
  }
  insertNode(node,newNode){
    if(newNode.value<node.value){
      if(!node.left){
        node.left=newNode
      }else{
        this.insertNode(Node.left,newNode)
      }
    }else{
      if(!node.right){
        node.right=newNode
      }else{
        this.insertNode(node.right,newNode);
      }
    }
  }

  inorder(node=this.root,result=[]){
    if(node){
      this.inorder(node.left,result);
      result.push(node.value);
      this.inorder(node.right,result)
    }
    return result
  }
}

const tree = new bt();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
console.log(tree.inorder());
