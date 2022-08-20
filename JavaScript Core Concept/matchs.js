const number = [45, 64, 65, 42, 64, 64];

// for (let i = 0; i < number.length; i++) {
//   const number = number[i];
//   console.log(number);
// }

for (const num of number) {
  console.log(num);
}

const product = [
  { id: 1, name: "smasung", price: 44654 },
  { id: 2, name: "lenovo", price: 1454 },
  { id: 3, name: "smasung", price: 44654 },
  { id: 4, name: "smasung", price: 44654 },
  { id: 5, name: "smasung", price: 44654 },
  { id: 6, name: "smasung", price: 44654 },
  { id: 7, name: "smasung", price: 44654 },
  { id: 8, name: "smasung", price: 44654 },
];

function metchProduct(serach, products) {
  const metched = [];

  for (const product of products) {
    if (product.id.includes(serach)) {
      metched.push(product);
    }
  }
  return metched;
}
const result = metchProduct(product, "phone");
console.log(metchProduct(result));
