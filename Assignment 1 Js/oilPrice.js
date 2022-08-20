function oilPrice(diselQuantity, petrolQuantity, octenQuantity) {
  let perLiterDisel = 114;
  let perLiterpetrol = 130;
  let perLiterocten = 135;

  let diselPrice = diselQuantity * perLiterDisel;
  let petrolPrice = petrolQuantity * perLiterpetrol;
  let octenPrice = octenQuantity * perLiterocten;
  const totalResult = diselPrice + petrolPrice + octenPrice;

  // Error heandaling
  if (
    typeof diselQuantity !== "number" ||
    typeof petrolQuantity !== "number" ||
    typeof octenQuantity !== "number"
  ) {
    return "Pless enter valid num";
  }
  // final result return
  return totalResult;
}

/* User given  input*/
const disel = 2;
const petrol = 10;
const octen = 3;
// const userGivenInput = disel + petrol + octen;
const totalOilPrice = oilPrice(disel, petrol, octen);
console.log(totalOilPrice);
