function powing(num, degree) {
  let result = 1;
  for (let pow = 1; pow <= degree; pow++) {
    result *= num;
  }
  return result;
}

const pows = powing(2, 4);

console.log(pows);
