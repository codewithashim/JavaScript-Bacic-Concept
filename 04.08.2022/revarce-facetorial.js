function revaceFactorial(nums) {
  let result = 1;
  for (let i = nums; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

const num = 15;
const fact = revaceFactorial(num);
console.log(num, fact);
