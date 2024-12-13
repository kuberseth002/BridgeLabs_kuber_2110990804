function longstring(str) {
  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const text = "The quick brown fox jumped over the lazy dog";
console.log(longstring(text)); 
