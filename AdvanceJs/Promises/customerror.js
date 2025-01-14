class CustomError extends Error {
  constructor(message) {
    super(message);  
    this.name = "CustomError"; 
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.log(error.name); 
  console.log(error.message); 
}
