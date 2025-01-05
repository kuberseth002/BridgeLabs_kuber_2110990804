function twosum(n,target){
  const sum={}

  for(let i=0;i<n.length;i++){
    const result=target-n[i]

    if(sum[result]!==undefined){
      return[sum[result],i]
    }
    sum[n[i]]=i
  }
  return []

}
console.log(twosum([2,7,11,15],9));
