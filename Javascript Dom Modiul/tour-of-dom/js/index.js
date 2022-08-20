// console.log("hey javscript");
// console.log(document)
// console.log(document.body)

// const student = {
//   name: "ashim",
//   roll: 493549,
//   dipertment: "cse",
//   study: function (time) {
//     console.log(time, "When i read book");
//   },
// };

// document.getElementsByTagName("h1");

// const documentColection = document.getElementsByTagName("li");
// for (const li of documentColection) {
//   console.log(li.innerText);
// }

let visitedPlace = (document.getElementById(
  "visited_title"
).style.backgroundColor = "green");
visitedPlace.innerText = "helllo js";
visitedPlace.innerHTML;

// const places = document.getElementsByClassName("visited_place");
// for (const place of places) {
//   console.log(place);
// }

// document.querySelectorAll("#visited_place");

//========================== quary selector============================

const stylemare = document.querySelectorAll(".visited_container li");
for (const li of stylemare) {
  console.log(li.innerText);
}
