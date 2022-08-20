function avgaregNum(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let avareg = sum / 3;
  avareg = avareg.toFixed(3);
  return avareg;
}

let valueOfNum1 = 25;
let valueOfNum2 = 65;
let valueOfNum3 = 83;
let totalAvg = avgaregNum(valueOfNum1, valueOfNum2, valueOfNum3);
console.log("The avarege :", totalAvg);
