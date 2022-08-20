function onlyPosetive(number) {
  let newNum = [];
  for (let i = 0; i < number.length; i++) {
    let index = i;
    let element = number[index];

    if (element < -1) {
      break;
    }
  }
  return newNum;
}

let numArry = [44, 54, 44, 35, 13, -21, 65, 41, 47];
const myResult = onlyPosetive(numArry);
console.log("The Returnd Array IS", myResult);

// const arr = [5, -5, -3, -5, -7, -8, 1, 9];
// const sumPositives = (arr = []) => {
//    const isPositive = num => typeof num === 'number' && num > 0;
//    const res = arr.reduce((acc, val) => {
//       if(isPositive(val)){
//          acc += val;
//       };
//       return acc;
//    }, 0);
//    return res;
// };
// console.log(sumPositives(arr));
