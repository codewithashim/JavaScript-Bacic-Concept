function centimeterToMeter(centimeter) {
  const meter = centimeter * 0.01;

  return meter;
}

let userGivenCm = 100;
const convMeter = centimeterToMeter(userGivenCm);
console.log(convMeter);
