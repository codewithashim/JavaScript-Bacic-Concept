const shoopingCart = [
  { name: "Shoos", Price: 1500 },
  { name: "T-Sirt", Price: 500 },
  { name: "Belt", Price: 400 },
  { name: "Pent", Price: 2000 },
  { name: "Panjabi", Price: 1200 },
  { name: "Watch", Price: 3000 },
  { name: "Sunglass", Price: 1000 },
];

function totalCost(Product) {
  let sum = 0;
  for (let i = 0; i < Product.length; i++) {
    const product = Product[i];
    sum = sum + product.Price;
  }

  return sum;
}

const totalValue = totalCost(shoopingCart);
console.log("Total Price :", totalValue);
