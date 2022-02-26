// Best solution:

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}



// My solution: 

function mydisemvowel(str) {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  let arr = [];
  
  for (let i = 0; i < str.length; i++) {
    if (!(vowels.includes(str[i]))) {
      arr.push(str[i]);
    }
  }
  
  str = arr.join("");    
    
  return str;
}
