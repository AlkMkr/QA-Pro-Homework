var services = {
  "break glass": "20 UAH",
  "repair glass": "50 UAH",
  haircut: "100 UAH",
  "exquisite haircut": "200 UAH",
  "beard trimming": "100 UAH",
  price: function () {
    let sum = 0;
    for (let key in this) {
      let num = parseFloat(this[key]);
      if (!isNaN(num)) {
        sum += num;
      }
    }
    console.log(sum);
  },
  minPrice: function() {
    let min = Infinity;
    for (let key in this) {
      let num = parseFloat(this[key]);
      if (num < min) {
        min = num;
      }
    }
    console.log(min);
  },
  maxPrice: function() {
    let max = 0;
    for (let key in this) {
      let num = parseFloat(this[key]);
      if (num > max) {
        max = num;
      }
    }
    console.log(max);
  }
};



services.price();
services.minPrice();
services.maxPrice();
services['drive around'] = '10 UAH';
services['drive in lamborgini'] = '1000 UAH';
services.price();
services.minPrice();
services.maxPrice();