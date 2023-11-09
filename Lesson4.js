const prompt = require("prompt-sync")();
let year = prompt("Введіть свій рік: ");
if (year%1==0) {
  if (year < 0) {
    console.log("Вік не може бути менше нуля");
  } else if (year === 1 || (year - 1) % 10 === 0) {
    console.log(year + " рік");
  } else if (
    (year >= 2 && year <= 4) ||
    (year - 2) % 10 === 0 ||
    (year - 3) % 10 === 0 ||
    (year - 4) % 10 === 0
  ) {
    console.log(year + " роки");
  } else {
    console.log(year + " років");
  }
}
else{
  console.log("Рік повинен бути числом");
}
