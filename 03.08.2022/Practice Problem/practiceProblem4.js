const grade = [54, 44, 65, 41, 32, 12, 10, 12];
function totalAvvg(grade) {
  const total = grade.reduce((acc, c) => acc + c, 0);
  return total / grade.length;
}
const avareg = totalAvvg(grade);
console.log(avareg);
