const lyrix =
  "Tumi bondhu kala pakhi Ami jeno ki Bosonto kaale tomay Bolte parini";

const part = lyrix.split(" ");
const sentence = lyrix.split(".");
const char = lyrix.split("");

console.log(part);
console.log(sentence);
console.log(char);

const partial = lyrix.slice(5, 8);
const partial2 = lyrix.substring(0, 8);
console.log(partial);
console.log(partial2);

// ======================Concate========================
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // [object Object]
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
