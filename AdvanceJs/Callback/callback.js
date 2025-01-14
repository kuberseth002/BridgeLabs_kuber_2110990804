//  A callback is a function passed as an argument to another function, to be executed later.
// Enables asynchronous operations by defining what happens after a task completes.
// Allows better control over the flow of the program in asynchronous tasks.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((data) => {
  console.log(data); 
});
