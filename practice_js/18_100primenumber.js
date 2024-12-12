function isprime(n){
  if(n==1){
    return true
  }
  else if(n==2){
    return true

  }
  for(let i =2;i<n;i++){
    if(n%i==0){
      return false
    }
    else{
      return true
    }
  }

}
// console.log( isprime(44));

for(var i=0;i<100;i++){
  if(isprime(i)){
    console.log(i);
  }
}