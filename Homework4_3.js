function counter(limit) { // limit is the how much numbers we will generate
  let even = 0;
  let odd = 0;
  for (let i = 1; i <= limit; i++) { // cycle until we will reach limit
    let num = Math.random() * 1000; // generate a random number multiplied on 1000
    if (Math.floor(num) % 2 == 0) { // round it and check if it's even(used Math.floor for simplicity, could've used .ceil or .trunc)
      even++; //if even add to even counter
    } else {
      odd++; //if not even add to odd counter
    }
  }
  let diff = even / odd; // calculate the amout of even numbers per odd number
  let result = { "Even numbers per odd numbers": diff, Odds: odd, Evens: even }; // wrap it
  return result; // retrun the result
}
const func = counter(1000);
console.log(func);
