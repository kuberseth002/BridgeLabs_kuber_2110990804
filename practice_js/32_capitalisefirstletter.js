function capitalise(){
  let arr=["kuber","rohan","abhi"]
  let result=arr.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
  console.log(result);
  
}
capitalise()