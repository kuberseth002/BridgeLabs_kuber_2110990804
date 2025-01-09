// // classes:-eg of house--->blueprint of house by following that plan we created a house called  object and plan is the blue print
// // actual thing is called object class is called blueprint 


// //create a class

class human{
  //properties

  age=25;  //deafult public 
  #wt=80    //private using # access using this->curr obj.#name obj name private acceess within the class 
  ht=180


  //constructor:special function to intialise
  constructor(newAge,newHeight,newweight){

    this.age=newAge;
    this.ht=newHeight
    this.#wt=newweight;




  }



  //behaviour
  walking(){
    console.log("i am walking",this.#wt);
    
  }

  running(){
    console.log("i am running");
    
  }

  //geters and setters:to use private class outside the class-->data production  provide hoskke 
  // getters used to access function -->encapsulation setup and increase in code hogi h and and abstraction layer
  get fetchweight(){
    return this.#wt
  }
   //setters used to update and modify
  set modifyweight(val){

    this.#wt=val

  }
}
let obj = new human(50,190,101)
console.log(obj.fetchweight);

obj.walking();
obj.running();



// //default parameters

function sayname(myname="kuber seth"){// default name
  console.log("my name is:",myname);
}
sayname()


function fname(fname,lname=fname.toUpperCase()){
  console.log("my name is:",fname,lname);
  
}

fname("kber")//parameter


//default parameter is object

function solve(value={age:15,wt:19,ht:180}){  //deafult object in refernce type 
  console.log("Hello ji",value);
}

solve()
//defalt arays
function solve1(value=["seth","kuber","Abhi"]){  //deafult object in refernce type 
  console.log("Hello ji",value);
}
solve1()


//default in fucntion 




function getage(){
  return 190;
}

function utility(name="kuber",age=getage()){
  console.log(name," ",age);
  

}
utility();

