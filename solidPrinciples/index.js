//single responsiblity principle
//wrong way to validate 

ValidateAndCreateUser=(name,password,email)=>{
  const isFormValid=testForm(name,password,email);

  if(isFormValid){
    User.Create(name,password,email)
  }
}
//in this above two function are working as  two different responsiblity/fucntions
//the correct way to validate is

validateRequest=(req)=>{
  const isFormValid=testForm(name,password,email)
  //form isvalid: here we are validate the user request

  if(isFormValid){
    createUser(req)
  }
}
 // if the user is validate then we will do creatation of  a user  in another function so here we are writing two function
createUser=(req)=>user.Create(req.name,req.password,req.email)



//open/close principle
//means open for extension but closed to modification:-->overall means to chanage the behaviour by adding the new code without changing the previous code
//instead rather than modifying the existing code not to break existing functionalities

const roles=["ADMIN","USER"]
checkRole=(user)=>{
if(roles.includes(user.role)){   //not touching the code adding new functionality by making new code
  return true
 }else{
  return false
 }
}

//adding new role without changing the above code and fucntionality
addRole(roles){
  roles.push(roles)
}

addRole("SuperUser")

//test role
checkRole("Admin");//true
checkRole("Foo");//false
checkRole("SuperUser");//true



//liskov substituuition:-

//wrong
class bird{  //base class
  fly(){
    //..   //in this we have bird class and fly method
  }
}
  //child inherit parent
class Eagle extends bird{ //this eagle class extend the bird class which include both methods
  dive(){
    //..
  }
}

const eagles = new Eagle()
eagle.fly()
eagle.dive()  

class Penguin extends bird(){
  //cant fly!
}

//so here bird is a base class which include methods and we cannot extend this other methods because it hasnot any relation with fly method

//correct way

class Bird{
  layegg(){

  }
}

class flyingbird{
  fly(){}
}
class swimmingbird extends Bird{
  swim(){

  }
}

class Eagle extends flyingbird{}
class penguin extends swimmingbird{}

const penguin = new Penguin()
penguin.swim();
penguin.layegg();

const eagle = new Eagle()
eagle.fly()
eagle.layegg()




// interface segregation principle  
//means:segreagate things in two ways

class User{
  constructor(username,password){
    this.username=username;
    this.password=password;
    this.initialUser()
  }
  initialUser(){                      // here we are initiating and validating the user weather neede or not
    this.username=this.username
    this.validUser()
  }

  validUser=(user,pass)=>{
    console.log("validationg...");
  }
}


const user = new User("Francesso","123456");
console.log(user);//wrong way

//correct validate only if it is neccessary

class UserISP{
  constructor(username,password,validate){
    this.username=username;
    this.password=password
    this.validate=validate

    if(validate){
      this.initialUser(username,password)
    }else{
      console.log("no validation required");
      
    }
  }

  initialUser(){
    this.validUser(this.username,this.password)
  }
  validUser=(username,password)=>{
    console.log("validation");
    
  }
}
//based on the flag true false we are segregating the interface

//user with validation required
console.log(new UserISP("Francesso","123456",true));




//dependency inversion principle

//wrong

http.get("https://address/api/examples",(res)=>{
  this.setState({
    key1:res.value1,   //calling api and there states it is tightly coupled with data set
    key2:res.value2,
    key3:res.value3
  });
});

//correct
const httprequest=(url,setState)=>{
  http.get(url,(res)=>setState.setValues(res))
}

//state set in another function

const setState={
  setValues:(res)=>{
    this.setState({   // set in another function not coupled in data can be used again
      key1:res.value1,   // loosely coupled
      key2:res.value2,
      key3:res.value3
    })
  }
}

//htps request,state set in different function

httprequest("https://address/api/example",setState)