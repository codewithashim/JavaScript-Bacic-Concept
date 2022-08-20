function evenOddCheck(number) {
  let myNum = number % 2;

  if (myNum === 0) {
    return true;
  } else {
    return false;
  }
}

let userGivenNum = evenOddCheck(45);
console.log("This Is Even Number", userGivenNum);
