const prompt = require("prompt-sync")();
let unit = prompt("Enter the unit: km, kg, h: ");
let value_of_unit = prompt("Enter the value: ");
if (value_of_unit) {
  if (value_of_unit % 1 === 0) {
    switch (unit) {
      case "km":
        console.log(`${value_of_unit}km is ${value_of_unit * 1000}m`);
        break;
      case "kg":
        console.log(`${value_of_unit}kg is ${value_of_unit * 1000}g`);
        break;
      case "h":
        console.log(`${value_of_unit} hours is ${value_of_unit * 60} minutes`);
        break;
      default:
        console.log(`${unit} isn't supported by converter`);
    }
  } else {
    console.log("Value should be a number");
  }
} else {
  console.log("Value should be filled");
}
