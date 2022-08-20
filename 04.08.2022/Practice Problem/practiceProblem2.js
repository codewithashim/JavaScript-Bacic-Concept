function getLeyear(userGivenNum) {
  let lepyear = [];

  for (let i = 1; i < userGivenNum.length; i++) {
    const index = i;
    let element = userGivenNum[index];

    if ((element % 4 == 0 && element % 100 != 0) || element % 400 == 0) {
      lepyear.push(element);
    }
    // if (element % 4 === 0) {
    //   lepyear.push(element);
    // }
  }
  return lepyear;
}

let lepYearArr = [2023, 2024, 2025, 2028, 2030];
let getLepyears = getLeyear(lepYearArr);
console.log("This Year Are LepYear:", getLepyears);
