function divisors(integer) {
  let divisorsArr = [];
  
  for (let i = 2; i < integer; i++) {
    if (!(integer % i)) {
      divisorsArr.push(i);
    }
  }
  
  return divisorsArr.length ? divisorsArr : `${integer} is prime`;
}
