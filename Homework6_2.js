const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};


function findByValue(object, field, value) {
  for (let key in object) {
    // iterate the object
    let item = object[key]; // take current value
    if (item && typeof item === "object") {
      // if it's an object then proceed
      if (item[field] === value) {
        // if it's a match, then return whole
        return item;
      } else if (Array.isArray(item[field])) {
        let recursive = findByValue(item[field], field, value); // if the value is an array then iterate it again
        if (recursive) {
          return recursive; // if it's a match then return value
        }
      } else if (typeof item === "object") {
        let recursive = findByValue(item, field, value); // if the value is an object, then iterate it again
        if (recursive) {
          return recursive; //if it's a match then return it
        }
      }
    }
  }
  return null; // if there are no matches then return null
}

let value = findByValue(company, "name", "Клієнт 2");
console.log(value);
value = findByValue(company, "name", "Клієнт 1.2");
console.log(value);
