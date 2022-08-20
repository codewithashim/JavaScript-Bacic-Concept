const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitle = document.getElementsByClassName("sectionTitle");
console.log(allTitle);

const secondSection = document.getElementById("section_2");
secondSection.style.color = "red";
secondSection.style.backgroundColor = "skyblue";
secondSection.style.padding = "2rem";
secondSection.style.fontSize = "2rem";

const secondList = document.getElementById("second_list");
const li = document.createElement("li");
li.innerText = "my document 2";

secondList.appendChild(li)