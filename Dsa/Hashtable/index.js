//additionl feture of hashtable is linear probing:checks next slot sequentially ,quadratic probing:-check slots in quadratic step ,double hashing:- use second hash function for probing

class hashtable{
  constructor(size=10){
    this.table=new Array(size);
    this.size=size;
  }


_hash(key) {
  let hash=0;
  for(let char of key){
    hash+=char.charCodeAt(0)
  }
  return hash%this.size
}

set(key,value){
  const index=this._hash(key);
  this.table[index]=[key,value]
}

get(key){
  const index=this._hash(key);
  const pair=this.table[index]
  if(pair&&pair[0]===key){
    return pair[1];
  }
  return undefined;
}

remove(key){
  const index=this._hash(key);
  const pair=this.table[index];
  if(pair && pair[0]===key){
    this.table[index]=undefined
    return true
  }
  return false;
}

display(){
  for(let i=0;i<this.size;i++){
    if(this.table[i]){
      console.log(i,":",this.table[i]);
     }
   }
 }
}


const hashtable=new hashtable(5);

hashtable.set("name","kuber");
hashtable.set("age",25);

console.log(hashtable.get("name"));
console.log(hashtable.get("age"));

hashtable.remove("name");
console.log(hashtable.get("name"));

hashtable.display()


