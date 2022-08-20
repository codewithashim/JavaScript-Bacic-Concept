function feetToInch(feet) {
  const inch = feet * 12;
  Math.round(inch);
  return inch;
}

let userGivenFeet = 1;
let convInch = feetToInch(userGivenFeet);
console.log(convInch);
