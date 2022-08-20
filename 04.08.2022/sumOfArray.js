function getSumOfArry(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const index = i;
    const element = nums[index];
    sum = sum + element;
    // console.log(`${index}, ${element}= ${sum}`);
  }
  return sum;
}


function getOddnums(number) {
  const oddNum = [];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];

    if (element % 2 !== 0) {
      console.log(index, element);
      oddNum.push(element);
    }
  }
  return oddNum;
}

const myNums = [13, 12, 9, 45, 61, 54, 55];
const oddNumber = getOddnums(myNums);
const oddSums = getSumOfArry(oddNumber);
console.log("The Sum Of Odd Nums :", oddSums);
