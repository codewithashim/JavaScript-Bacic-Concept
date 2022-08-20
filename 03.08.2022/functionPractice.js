function getAvareg(Bangla, English, Matehs, Baiology, Chemistry) {
  var totalSub = Bangla + English + Matehs + Baiology + Chemistry;
  var avaregMark = totalSub / 5;
  return avaregMark;
}

let banglaMark = 85;
let englishMark = 80;
let meathMark = 95;
let baiologyMark = 75;
let chemistryMark = 80;

let avareg = getAvareg(
  banglaMark,
  englishMark,
  meathMark,
  baiologyMark,
  chemistryMark
);

console.log("Your Avareg Mark Is :", avareg);
