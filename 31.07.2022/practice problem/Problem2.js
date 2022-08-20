var gradeA = 80;
var gradeB = 60;
// problem 2

var gradeC = 50;
var gradeD = 40;
var gradeF = 30;

var myMark = 85;
var tomMark = 66;
var peterMark = 56;
var janeMark = 95;
var jhonMark = 40;

// if (gradeA >= 80) {
//   console.log("Your Total Score Is (A)", myMark);
//   console.log("Jane Total Score Is (A)", janeMark);
// } else if (gradeB >= 60) {
//   console.log("Toms Total Score Is (B)", tomMark);
// } else if (gradeC >= 50) {
//   console.log("Peter Mark Is (C)", peterMark);
// } else if (gradeD >= 40) {
//   console.log("Jhon Total Score Is (D)", jhonMark);
// } else {
//   console("Fail");
// }

if (gradeA >= 80) {
  console.log("Your Total Score Is (A)", myMark);
  console.log("Jane Total Score Is (A)", janeMark);

  if (gradeB >= 60) {
    console.log("Toms Total Score Is (B)", tomMark);
  }
  if (gradeC >= 50) {
    console.log("Peter Mark Is (C)", peterMark);
  }
  if (gradeD >= 40) {
    console.log("Jhon Total Score Is (D)", jhonMark);
  }
} else {
  console.log("Fail");
}
