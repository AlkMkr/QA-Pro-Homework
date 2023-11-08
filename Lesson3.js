let num0 = "number" + 3 + 3;
console.log("num0", num0); //output is 'number33', because it's string + number

let num1 = null + 3;
console.log("num1", num1); //output is 3, because null converts to 0 in math

let num2 = 5 && "qwerty";
console.log("num2", num2); // output is qwerty, because if both values are true, then returns last value

let num3 = +"40" + +"2" + "hillel";
console.log("num3", num3); // output is 42hillel, 40 and 2 converts into numbers and sums up, then add to the string

let num4 = "10" - 5 === 6;
console.log("num4", num4); // output is false, because "10" - 5 converts to number and 5!= 6

let num5 = true + false;
console.log("num5", num5); //output is 1, because true = 1 and false = 0, 1+0=1

let num6 = "4px" - 3;
console.log("num6", num6); // output is NaN, because 4px isn't a number and can't be converted

let num7 = "4" - 3;
console.log("num7", num7); //output is 1, because '4' converted into number

let num8 = "6" + 3 ** 0;
console.log("num8", num8); //output is 61, because it's adding a value to the end of the string as a part of the string

let num9 = 12 / "6";
console.log("num9", num9); // output is 2, because '6' is converted to number

let num10 = "10" + (5 === 6);
console.log("num10", num10); //output is 10false because of similar reasons as in num8

let num11 = null == "";
console.log("num11", num11); //outup is false, because null is an object and isn't equal to false or 0
//also to test null use ===

let num12 = 3 ** (9 / 3);
console.log("num12", num12); //output is 27 because it's just 3^3

let num13 = !!"false" == !!"true";
console.log("num13", num13); // output is true, because !! applies corresponding boolean primitive to value
// i.e. false of the false is true and true of the true is true, hence !!false = true, !!true = true

let num14 = 0 || ("0" && 1);
console.log("num14", num14); // output is 1, because || executes first returning '0','0' converts to false false&&1 returns 1

let num15 = (+null == false) < 1;
console.log("num15", num15); //output is false because +null is 0 and the +null==false is true -> true !< 1

let num16 = (false && true) || true;
console.log("num16", num16); // output is true, && executes first, and false||true is true

let num17 = false && (false || true);
console.log("num17", num17); //output is false, because || executes first and false&&ture = false

let num18 = (+null == false) < 1 ** 5;
console.log("num18", num18); // the same case as num15, 1^5 is 1 +null==false is true true !< 1