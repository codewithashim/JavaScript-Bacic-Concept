var shopingCart = {
  pen: 45,
  book: 2,
  sunglass: 1,
  pendrive: 1,
  keybord: 1,
};
var penCount = shopingCart.pen;
var penCount2 = shopingCart[1];

var propatice = Object.keys(shopingCart);
var propatice2 = Object.values(shopingCart);

console.log(propatice);
console.log(propatice2);

shopingCart.book = 52;
shopingCart['book'] = 52;
console.log(shopingCart);
// console.log(penCount);
