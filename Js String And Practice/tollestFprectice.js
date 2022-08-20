function getMaxHight(number) {
  let largest = 0;
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const elememt = number[index];

    if (elememt > largest) {
      largest = elememt;
    }
  }
  return largest;
}

let height = [456, 465, 465, 477, 164, 564, 41, 156];
let maxArray = getMaxHight(height);
console.log("The Tolest person is :", maxArray);
