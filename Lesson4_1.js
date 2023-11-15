const prompt = require("prompt-sync")();
let unit = prompt("Enter the unit: km, kg, h: ");
let value_of_unit = prompt("Enter the value: ");
let converted;
if (value_of_unit) { 
  if (value_of_unit % 1 === 0) {
    switch (unit) {
      case "km":
        converted = value_of_unit * 1000;
        console.log(`${value_of_unit}km is ${converted}m`);
        break;
      case "kg":
        converted = value_of_unit * 1000;
        console.log(`${value_of_unit}kg is ${converted}g`);
        break;
      case "h":
        converted = value_of_unit * 60;
        console.log(`${value_of_unit} hours is ${converted} minutes`);
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
