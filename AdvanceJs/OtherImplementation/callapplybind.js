// apply call and bind

//call

let userdeatails={
  name:"kuber seth",
  age:28,
  designation:"software engineer",
  // printdetails:function(){
  //   console.log(this.name); 
  // }
}
let printdetails=function(state,country){
  console.log(this.name +" "+state +" " +country);
}
printdetails.call(userdeatails,"delhi","INdia")

let userdeatails2={
  name:"Abhi seth",
  age:29,
  designation:"software engineer",
  printdetails:function(){
    console.log(this);

  }
  //function borrowing
}
printdetails.call(userdeatails2,"Delhi","England")
//call:-->only single valuee can be added indivudually 
//difference:-
//apply:-in this we can pass an array list multiple elements

printdetails.apply(userdeatails2,["Delhi" ,"india"])


//bind:-bind the function together dont do direct call  call the fucntion make a copy and store that in memoru and ivoke it when needed it is same like call only when needed call it

let newfun=printdetails.bind(userdeatails,"delhi","india")
newfun()
