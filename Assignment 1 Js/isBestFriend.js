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
