var num = [45, 4, 522, 4165, 41654, 4, 544, 4474, 444];
num.push("ashim");
num.push("Rudra");
num.pop();
console.log(num);

var frute = ["mengo", "apple", "banana"];

frute.unshift("Orenge");

console.log(frute);

var fruits = ["Apple", "Banana", "Mango"];

// Prepend a single element to fruits array
fruits.unshift("Orange");

console.log(fruits);
// Prints: ["Orange", "Apple", "Banana", "Mango"]

// Prepend multiple elements to fruits array
fruits.unshift("Guava", "Papaya");

console.log(fruits);
// Prints: ["Guava", "Papaya", "Orange", "Apple", "Banana", "Mango"]

// remove firest element from array 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
