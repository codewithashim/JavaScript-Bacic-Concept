let sum = 0;

for (let i = 0; i <= 7; i++) {
  sum = sum + i;
  console.log(i, sum);
}

function sumOfNum(num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum = sum + i;
    console.log(i, sum);
  }

  return sum;
}

let myNum = sumOfNum(15);
console.log(myNum);
