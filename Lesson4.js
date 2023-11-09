const prompt = require("prompt-sync")();
let year = prompt("Введіть свій рік: ");
if (year) {
  // check if year is filled
  if (year % 1 === 0) {
    // check if year is a number
    if (year < 0) {
      // check if year is positive number
      console.log("Вік не може бути менше нуля");
    } else if (year === 1 || (year - 1) % 10 === 0) {
      // check if year is ending on 1
      console.log(year + " рік");
    } else if (
      (year >= 2 && year <= 4) ||
      (year - 2) % 10 === 0 ||
      (year - 3) % 10 === 0 ||
      (year - 4) % 10 === 0
    ) {
      // check if year is ending on 2, 3 or 4
      console.log(year + " роки");
    } else if (year || year === 0) {
      // check if year is either 0 or any other number
      console.log(year + " років");
    }
  } else {
    console.log("Рік повинен бути числом!");
  }
} else {
  console.log("Рік не повинен бути пустим!");
}
