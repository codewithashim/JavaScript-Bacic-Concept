const shoopingCart = [
  { name: "Shoos", Price: 1500, quantitty: 2 },
  { name: "T-Sirt", Price: 500, quantitty: 2 },
  { name: "Belt", Price: 400, quantitty: 2 },
  { name: "Pent", Price: 2000, quantitty: 2 },
  { name: "Panjabi", Price: 1200, quantitty: 2 },
  { name: "Watch", Price: 3000, quantitty: 2 },
  { name: "Sunglass", Price: 1000, quantitty: 2 },
];

function totalCost(Product) {
  let sum = 0;
  for (let i = 0; i < Product.length; i++) {
    const product = Product[i];
    const productTotal = product.Price * product.quantitty;
    sum = sum + productTotal;
  }

  return sum;
}

const totalValue = totalCost(shoopingCart);
console.log("Total Price :", totalValue);
