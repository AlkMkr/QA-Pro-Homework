let chikenPizza = {
  dough: "wheat",
  topping1: "chicken",
  topping2: "salami",
  cheese: "mozzarella",
  sauce: "pizza sauce",
  getInfo: function () {
    for (let key in this) {
      console.log(`${key}:${this[key]}`);
    }
    console.log("\n"); //for visibility value
  },
  newProperty: function (key, value) {
    this[key] = value;
  },
};

chikenPizza.getInfo();
chikenPizza.newProperty("topping3", "bacon");
chikenPizza.getInfo();
chikenPizza.newProperty("topping4", "tomatoes");
chikenPizza.getInfo();
chikenPizza.newProperty("topping5", "olives");
chikenPizza.getInfo();