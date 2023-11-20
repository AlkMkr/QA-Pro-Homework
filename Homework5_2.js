var services = {
  "break glass": "20 UAH",
  "repair glass": "50 UAH",
  haircut: "100 UAH",
  "exquisite haircut": "200 UAH",
  "beard trimming" : "100 UAH"
};

function price(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += parseFloat(obj[key]);
  }
  return sum;
}

function minPrice(obj) {
  let min = Infinity; // I kinda need this
  for (let key in obj) {
    let num = parseFloat(obj[key]);
    if (num < min) {
      min = num;
    }
  }
  return min;
}
function maxPrice(obj){
    let max = 0;
    for (let key in obj){
        let num = parseFloat(obj[key]);
        if (num > max){
            max = num
        }
    }
    return max;
}

const pricing = price(services);
console.log(pricing);
const minimum = minPrice(services);
console.log(minimum);
const maximum = maxPrice(services);
console.log(maximum);