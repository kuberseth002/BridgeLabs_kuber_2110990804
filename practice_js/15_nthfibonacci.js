//using recursion
function fibo(n){
  if(n<=1){
    return n
  }
  return fibo(n-1)+fibo(n-2)
}
// recursion
function printfibo(n){
  for(let i =0;i<n;i++){
    console.log(fibo(i));
    
  }
}
printfibo(10)