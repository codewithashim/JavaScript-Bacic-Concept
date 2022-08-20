function myFactorial(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * i;
  }
  return result;
}

const myFact = myFactorial(5);
console.log(myFact);
