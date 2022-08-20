function sumOfOddNum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const index = i;
    const element = num[index];
    sum = sum + element;
    // console.log(index, element);
  }
  return sum;
}

function getOddNums(number) {
  const oddNums = [];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];

    if (element % 2 !== 0) {
      oddNums.push(element);
      console.log(index, element);
    }
  }
  return oddNums;
}

const myNums = [13, 12, 9, 45, 61, 54, 55];
let oddNumSum = getOddNums(myNums);
let sumOfOdd = sumOfOddNum(oddNumSum);
console.log(sumOfOdd);
