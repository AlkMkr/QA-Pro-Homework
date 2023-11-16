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
      //if true
      atach += strings;
      return atach;
    } else {
      strings += atach;
      return strings;
    }
  } else {
    return strings;
  }
}
let letters = "12345";
const padding = pad(letters, "*", 7, 0);
console.log(padding);
