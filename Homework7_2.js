var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
];

function filterEmail(arr) {
  let reg = /^[^\s@]+@(gmail|yahoo)\.com$/i; // the expression validates the @ placement
  let filter = [];
  for (let obj = 0; obj < arr.length; obj++) {
    let check = arr[obj];
    if (reg.test(check.email)) {
      filter.push(check);
    }
  }
  return filter;
}

const filter = filterEmail(arr);
console.log(filter);
