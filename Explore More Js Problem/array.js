const country = "Bangladesh";
const age = 54;
const student = {
  id: 454,
  name: "Ashim",
  dipertment: "cse",
};

const firends = [41, 45, 56, 25, 64];
const indipendent = true;

console.log(typeof country);
console.log(typeof age);
console.log(typeof student);
console.log(Array.isArray(firends));
console.log(typeof indipendent);

console.log(firends.includes(25));

if (firends.indexOf(25) !== -1) {
  console.log("VALID");
} else {
  console.log("Invalid");
}

// ------------------------ concate ------------------------------

const newFriendAge = [25, 36, 17, 18, 65, 23];

const allFirends = newFriendAge.concat(firends);

console.log(allFirends);
