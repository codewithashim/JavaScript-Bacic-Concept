function evenNum(mudulas) {
  let num = mudulas % 2;

  if (num === 0) {
    return true;
  } else {
    return false;
  }
}

const myNum = evenNum(3014);
console.log("This Is Even Number", myNum);

const herNum = evenNum(3015);
console.log("This Is Even Number", herNum);
