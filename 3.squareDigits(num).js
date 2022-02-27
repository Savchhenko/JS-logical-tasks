function squareDigits(num){
  let res = [];
  for (let i = 0; i < num.toString().length; i++) {
    res.push(Math.pow(num.toString()[i], 2));
  }
  return +res.join("");
}


// Another solution

function squareDigits(num){
  return Number(num.toString().split('').map(i => return i * i).join(''));
}
