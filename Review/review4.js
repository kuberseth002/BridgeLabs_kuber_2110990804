const fetch = require('fetch');

// function reverse(arr,call){
  
//   arr.slice().reverse().forEach(call)
//   }
  // const number=[1,2,3,4,5]
  // function print(ele){
  // console.log(ele)
  // }

  // reverse(number,print)


//fetching id of the user from api


function userid(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));
  
  }
  
  userid();
  





