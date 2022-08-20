function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Pless enter valid num";
  }

  return num1 + num2;
}

const result = add(12, "45");
console.log(result);

function multiplay(num1, num2) {
  return num1 * num2;
}

const output = multiplay(25, 58);
console.log(output);
