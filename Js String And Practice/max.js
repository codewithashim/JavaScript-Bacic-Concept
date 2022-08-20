// const jim = 85;
// const dela = 95;
// const chinku = 65;

// if (jim > dela && jim > chinku) {
//   console.log("Jim Git The Cake");
// } else if (dela > jim && dela > chinku) {
//   console.log("Dela Get The Caek");
// } else {
//   console.log("Chinku Get The Cake");
// }

function getMax(jim, dela, chinku) {
  const getMaxNum = Math.max(jim, dela, chinku);

  if (jim === getMaxNum) {
    console.log("jim Git The Cake ");
  } else if (dela === getMaxNum) {
    console.log("dela get the cake");
  } else {
    console.log("Chinku get the cake");
  }
  return getMaxNum;
}

const jim = 85;
const dela = 95;
const chinku = 65;
let totalMark = getMax(jim, dela, chinku);
