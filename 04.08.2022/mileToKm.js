function milesToKm(mile) {
  const km = mile * 1.609;
  return km;
}

const setMile = 1512;
const toKm = milesToKm(setMile);
console.log(toKm);
