/**
 * 1 Table ====> 2
 * 2 Cheare ====> 4
 * 3 bad ========> 40
 * 4
 * vary : quantity
 */

function woodCalculator(ChairQuantity, tableQuantity, bedQuantity) {
  const parChairWood = 3;
  const parTableWood = 10;
  const parBedWood = 50;

  const chairWood = ChairQuantity * parChairWood;
  const tableWood = tableQuantity * parTableWood;
  const bedWood = bedQuantity * parBedWood;

  const totalWood = chairWood + tableWood + bedWood;

  //   console.log(ChairQuantity, tableQuantity, bedQuantity);
  return totalWood;
}

let chear = 45;
let table = 12;
let bed = 8;

const totalWood = woodCalculator(chear, table, bed);
console.log("Needed Total Wood :", totalWood);
