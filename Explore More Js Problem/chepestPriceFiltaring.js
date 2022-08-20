const phone = [
  {
    name: "Samsung",
    camera: "48 MegaPx",
    storeg: "128gb",
    ram: "4gb",
    color: "Golden",
    price: 45682,
  },

  {
    name: "OnePlus",
    camera: "64 MegaPx",
    storeg: "128gb",
    ram: "6gb",
    color: "Silver",
    price: 65682,
  },

  {
    name: "Xaiomi",
    camera: "28 MegaPx",
    storeg: "64gb",
    ram: "4gb",
    color: "Golden",
    price: 22682,
  },

  {
    name: "Oppo",
    camera: "48 MegaPx",
    storeg: "128gb",
    ram: "6gb",
    color: "Golden",
    price: 55682,
  },

  {
    name: "iPhone",
    camera: "108 MegaPx",
    storeg: "256gb",
    ram: "8gb",
    color: "Golden",
    price: 165682,
  },

  {
    name: "realmi",
    camera: "48 MegaPx",
    storeg: "128gb",
    ram: "4gb",
    color: "Black",
    price: 16850,
  },
];

function chepesPrice(phones) {
  let chepest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}

let myBuzetPhone = chepesPrice(phone);

console.log(myBuzetPhone);
