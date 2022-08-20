var shopingCart = {
  pen: 45,
  book: 2,
  sunglass: 1,
  pendrive: 1,
  keybord: 1,
  mouse: 5,
};

const key = Object.keys(shopingCart);
// console.log(key);
const value = Object.values(shopingCart);
// console.log(value);

for (var i = 0; i < key.length; i++) {
  //   console.log(key[i]);
  var propsName = key[i];
  var propsValue = shopingCart[propsName];
  //   console.log(propsName, propsValue);
}

for (propsName in shopingCart) {
  const value = shopingCart[propsName];
  console.log(propsName, value);
}
