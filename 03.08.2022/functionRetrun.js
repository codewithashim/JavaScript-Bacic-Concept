function add(a, b, c, d, e, f, g, h) {
  var sumNum = a + b + c + d + e + f + g + h;
  console.log(sumNum);
  return sumNum;
}
add(4, 4, 4, 6, 54, 84, 84, 5);

function singaraP(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}

var givenM = 250;

var singaras = singaraP(givenM);

console.log("Toatal Singara Buye :", singaras);
