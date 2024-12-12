// Create a function that will convert a string in an array containing the ASCII codes of each character

function strtoascci(){
  let str="kuber"
  let result=str.split(" ").map(string=>string.charCodeAt(0))
  console.log(result);
  
}
strtoascci()



function stringToAsciiArray(str) {
   return str.split('').map(char => char.charCodeAt(0));
 }
 const text = "kuber";
 const asciiArray = stringToAsciiArray(text);
 console.log(asciiArray); 
