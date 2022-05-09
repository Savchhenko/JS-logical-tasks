/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanNums = {   
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    const arr = Array.from(s);
    let res = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length && romanNums[arr[i] < romanNums[arr[i + 1]]]) {
            res -= romanNums[arr[i]];
        } else {
            res += romanNums[arr[i]];
        }
    }
    
    return res;
};
