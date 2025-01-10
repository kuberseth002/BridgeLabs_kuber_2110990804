//class:-it is type of blueprint in which it tells about what data members are present in this and what function methods are present in this 
//after creating a actual thing which is house called an object
//class has its state and properties and it is used to perfrom behaviour and functions

class Human{
  //properties
  age=13; //public default way use outside the class
  #wt=80; //private:- can be used in class only
  ht=180;

  //constructor: to initialise the value

  constructor(newAge,newHeight,newWeight){
    this.age=newAge;
    this.ht=newHeight
    this.#wt=newWeight
  }





  //behaviour
  #walking(){
    console.log("i am walking",this.#wt);
  }
  //this:-current object ko refer/access krna

  running(){
    console.log("i am running");
  }

  //to fetch the value
  get fethcweight(){    // get and set we write to get semantic clarity
    return this.#wt
  }

  //to modify/set the value
  set modifyweight(val){
    this.#wt=val
  }



}

let obj = new Human(50,150,101);
console.log(obj.fethcweight);
obj.walking()




//as private data is used in class only so to use outside the class here we use the concept getter and setter
 
