function radianToDegree(radian) {
  const degreeConvert = radian * 57.2958;
  if (typeof radian !== "number" || typeof degreeConvert !== "number") {
    return "Pless enter valid num";
  }
  return degreeConvert;
}

let userGivenInput = "hello";
const result = radianToDegree(userGivenInput);
console.log(result);
