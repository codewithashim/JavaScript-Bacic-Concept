function isLipiar(year) {
  const lipiarYear = year % 4;

  if (lipiarYear === 0) {
    return true;
  } else {
    return false;
  }
}

const givenYear = isLipiar(2054);

console.log("This year  is lipiar", givenYear);
