function pad(strings, symb, num, side) {
  let atach = ""; // attaching string
  let corr = num - strings.length; // how much we need to attach
  if (corr >= 0) {
    // if there's more than 0 space
    for (let i = 1; i <= corr; i++) {
      // counting symbols
      atach += symb; //adding symbols to attachment string
    }
    if (side) {
      //if true attach symbols in front of string
      atach += strings;
      return atach;
    } else {
      // if false attach symbols at the back of the string
      strings += atach;
      return strings;
    }
  } else {
    // if corr is less than 0 then just return original string
    return strings;
  }
}
let letters = "qwerty";
const padding = pad(letters, "*", 12, 0);
const padding1 = pad(letters, "*", 12, 1);
console.log(padding);
console.log(padding1);
