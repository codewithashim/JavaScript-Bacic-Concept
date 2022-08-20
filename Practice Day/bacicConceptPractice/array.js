let myNum = [46, 48, 14, 59, 44, 84, 74];
myNum.splice(4, 1, 456, 100, 5414);
console.log(myNum);

const newArray = [446, 464, 315, 418, 4154, 1116, 5102, 3114, 62, 41, 18];

if (newArray < 90) {
  console.log("The number ar valid");
} else {
  console.log("The value are invalid");
}

for (let i = 0; i < newArray.length; i++) {
  let element = newArray[i];

  if (element > 80) {
    console.log(element);
  } else {
    // console.log("Somthing went to worng");
  }
}
