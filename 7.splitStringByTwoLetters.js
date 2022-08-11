//Description
//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//Examples:
//
//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

// my solution:
function solution(str){
  let lettersArr = str.split("");
  let result = [];  
  
  if (!(lettersArr.length % 2)) {
    for (let i = 0; i < lettersArr.length; i+=2) {
      result.push([lettersArr[i], lettersArr[i+1]].join(""));
    }
  } else {
    for (let i = 0; i < lettersArr.length - 1; i+=2) {
      result.push([lettersArr[i], lettersArr[i+1]].join(""));
    }
    result.push([lettersArr[lettersArr.length-1], "_"].join(""));
  }
  
  return result;
};


//better solution:
function solution(str){
  let lettersArr = str.split("");
  let result = [];  
  
  if (lettersArr.length % 2 !== 0) {
    lettersArr += "_";
  } 
  
  for (let i = 0; i < lettersArr.length; i+=2) {
    result.push(lettersArr[i] + lettersArr[i+1]);
  }  
  
  return result;
};


// the shortest one:
function solution(str){
   return (str+"_").match(/.{2}/g)||[]
}
