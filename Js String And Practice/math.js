const result = Math.pow(3, 10);
console.log(result);

const num1 = 45;
const num2 = 50;
const gap = Math.abs(num1 - num2);
if (gap < 2) {
  console.log("You are my gf");
} else {
  console.log("You Are Just My Sister");
}

// ==========================

const number = 2.421545644;
const fullNum = Math.round(number);
console.log(fullNum);

const number2 = Math.ceil(2.421545644);
console.log(number2);

const number3 = Math.floor(42454.544);
console.log(number3);

console.log(Math.random());

for (let i = 0; i < 25; i++) {
  const randomCS = Math.round(Math.random() * 80);
  console.log(randomCS);
}
