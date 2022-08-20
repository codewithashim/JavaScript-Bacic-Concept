//============================== radianToDegree ===========================
function radianToDegree(radian) {
  const degreeConvert = radian * 57.2958;
  if (typeof radian !== "number" || typeof degreeConvert !== "number") {
    return "Pless enter valid num";
  }
  return degreeConvert;
}

let userGivenInput = 12;
// let userGivenInput = "hello";  // vavlidation check perpus
const result = radianToDegree(userGivenInput);
console.log(result);

//============================== isJavaScriptFile ===========================

function isJavaScriptFile(value) {
  if (value.endsWith(".js")) {
    if (typeof value !== "string") {
      return "Pless enter valid num";
    }
    return true;
  } else {
    return false;
  }
}

// const fileName = "index.pdf";
const fileName = "index.js";
const isJavaScript = isJavaScriptFile(fileName);
console.log(isJavaScript);

//==============================    oilPrice    ===========================
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
const totalOilPrice = oilPrice(disel, petrol, octen);
console.log(totalOilPrice);

//============================== publicBusFare ===========================
function publicBusFare(totalPepole) {
  let resurvedBusCanGo = 50;
  let resuvedBusRemainingPeople = totalPepole % resurvedBusCanGo;
  let microBusCanGo = 15;
  let microBusRemainingPeople = resuvedBusRemainingPeople % microBusCanGo;
  let restPepole = microBusRemainingPeople;
  let publicBusFareForPerPepole = 250;
  let totalFare = restPepole * publicBusFareForPerPepole;

  // error heandaling

  if (typeof totalPepole !== "number") {
    return "Pless enter valid num";
  }

  // total bus fare output
  return totalFare;
}

let totalPeopleAre = 70;
const BusFare = publicBusFare(totalPeopleAre);
console.log(BusFare);

//============================== isBestFriend ===========================

function isBestFriend(fastPerson, secondPerson) {
  if (
    fastPerson.name === secondPerson.firend &&
    secondPerson.name === fastPerson.firend
  ) {
    return true;
  } else {
    return false;
  }
}

let firend1 = {
  name: "Ashim",
  firend: "Dippanita",
  // firend: "Reya",
};

let firend2 = {
  name: "Dippanita",
  firend: "Ashim",
};

const finalResult = isBestFriend(firend1, firend2);
console.log(finalResult);
