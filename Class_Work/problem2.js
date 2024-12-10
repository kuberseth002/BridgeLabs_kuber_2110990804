// const prompt = require('prompt-sync')(); // Note the parentheses
// var studentName = prompt("Enter the name of the student: ");
// console.log("Student Name:", studentName);

const students=[
  {name:"Alice",grade:"85"},
  {name:"Bob",grade:"80"},
  {name:"Rohan",grade:"95"},
  {name:"Ajit",grade:"30"},
  {name:"Arnav",grade:"25"},
];

const passmarks=33;


function passfail(studentName){
  const student = students.find(s=>s.name===studentName)
  if(student){
    return student.grade>=passmarks?`${studentName} passed!`:`${studentName} failed`
  }else{
    return `student ${studentName} not found`;
  }
}

function countpassingstudent(){
  const passStudent=students.filter(students=>students.grade>=passmarks)
  return passStudent.length
}

console.log(passfail(studentName));


console.log(passfail("Alice"));
console.log(passfail("Bob"));
console.log(passfail("Rohan"));
console.log(passfail("Ajit"));
console.log(passfail("Arnav"));

console.log("Total number of students who passed",countpassingstudent());


// let arr=[1,2,3,4]
// arr.forEach((item,index) => {
//   console.log(item,index);

//   // arr.map((arr)=>{
//   //   console.log(arr);
    
//   // })



//   let string=["kuber","seth","123"]
//   let arr=string.map((i)=>i+2)
//   console.log(arr);
  

//   let arr=string.filter((i)=>i.charAt(0)=='k')
//   console.log(arr);


// const obj={
  //   name:"kuebr",
  //   age:25
  // }

  // console.log(obj);





