let chikenPizza = {
  dough: "wheat",
  topping1: "chicken",
  topping2: "salami",
  cheese: "mozzarella",
  sauce: "pizza souce",
  //   getInfo: function () {
  //     for (let key in this) {
  //       console.log(`${key}:${this[key]}`);
  //     }
  //   },
  //   newProperty: function (key, value) {
  //     this[key] = value;
  //   }
};

function getInfoTwo(object) {
  // this works better, than getters and setters, since getter doesn't dispaly the methods inside the object
  for (let key in object) {
    console.log(`${key}:${object[key]}`);
  }
  console.log("\n"); // for visibility value
}

function newProperty(object, key, value) {
  object[key] = value;
}
// chikenPizza.getInfo();
// chikenPizza.newProperty("topping3", "bacon");
// chikenPizza.getInfo();
getInfoTwo(chikenPizza);
newProperty(chikenPizza, "topping3", "bacon");
getInfoTwo(chikenPizza);
