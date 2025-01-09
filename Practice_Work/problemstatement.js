//questions on classes

// Q1.retail store need to manage customer information

class Customer{
  constructor(name,email,phone){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.purchaseHistory=[]
  }
  makepurchase(product){
    this.purchaseHistory.push(product)
  }

  getcustomerinfo(){
    return `Name: ${this.name}, Email:${this.email}, Phone:${this.phone},purchases:${this.purchaseHistory}`;
  }
}
const customer=new Customer("Kuber","kuber@gmail.com","885455665","thirt")
customer.makepurchase("Shoes")
console.log(customer.getcustomerinfo());




//Q2:Employee data

class Employee{
  constructor(name,id,department){
    this.name=name;
    this.id=id;
    this.department=department
    this.salary=0
  }

  setsalary(salary){
    this.salary=salary
  }

  getinfo(){
    return `name:${this.name}, id:${this.id}, department:${this.department}, salary:${this.salary}`
  }
}


const employee=new Employee("Kuber","786","It");
employee.setsalary(50000);
console.log(employee.getinfo());




//Q3:Veichle management

class Veichle{
  constructor(make, model){
    this.make=make;
    this.model=model
  }

  start(){
    console.log("vechile started");
  }
}

class Car extends Veichle{
  constructor(make,model,color){
    super(make,model)
    this.color=color
  }
}

class Motorcycle extends Veichle{
  constructor(make,model){
    super(make,model)
  }
}


const car=new Car("BMW","series 5","blue")
const bike=new Motorcycle("Honda","2024")
car.start()
bike.start()
console.log(car);
console.log(bike);




//objects question

// Q1:products info

const product1={
  name:"laptop",
  price:150000,
  brand:"mac-book",
  category:"electronics"
}

const product2={
  name:"phone",
  price:20000,
  brand:"samsung",
  category:"electoroncis"
}

console.log(product1)
console.log(product2);



//Q2: weather app

class weatherdata{
  constructor(location,tempertature,humidity,condtion){
    this.location=location;
    this.tempertature=tempertature;
    this.humidity=humidity
    this.condtion=condtion
  }
}

const weather=new weatherdata(
  "New york",
  -5,
  55,
 "snowy"
)
console.log(weather);


// Q3:social media app

class User{
  constructor(name,email,phone,location){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.location=location
  }
}

const user=new User(
  "kuber",
  "kuber@gmail.com",
  8451354843,
  "patiala"
)

const user2=new User(
  "lucky",
  "lucky@gmail.com",
  78462645456,
  "rajpura"
)

console.log(user);
console.log(user2);




// object refernce
const obj1 = { 
  name: "John", 
  address: { 
      street: "Main St", 
      city: "Anytown" 
  } 
};

const obj2 = { ...obj1 }; 

obj2.address.street = "New St"; 

console.log(obj1.address.street); 



const person = {};
Object.defineProperty(person, 'name', {
  value: 'John Doe', 
  writable: false,
  enumerable: true, 
  configurable: false 
});

console.log(person.name);

person.name = 'Jane Doe'; 
console.log(person.name); 