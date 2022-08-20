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
