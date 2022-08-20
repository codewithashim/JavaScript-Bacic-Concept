function multiflicatonNum(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

const results = multiflicatonNum(10);
console.log(results);
