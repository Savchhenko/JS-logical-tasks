// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// My solution:
function findOdd(A) {
    const uniqueArr = new Set(A);
    let res;
    
    uniqueArr.forEach(num => {
        let counter = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i] === num) {
                counter++;
            } 
        }

        if (counter % 2 !== 0) {
            res = num;
        }
    });
    
    return res;
};

// the shortest solution:
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// where ^ it's XOR operator


// other solutions:

function findOdd(A) {
  let obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
};


function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
