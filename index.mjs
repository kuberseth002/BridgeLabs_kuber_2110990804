import fetch from 'node-fetch'

function userid(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));

}

userid();
