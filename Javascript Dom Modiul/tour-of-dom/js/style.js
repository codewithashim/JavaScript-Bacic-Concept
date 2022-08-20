const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid black";
  section.style.margin = "2rem";
  section.style.padding = "2rem";
  section.style.backgroundColor = "gray";
  section.style.borderRadius = "5px";
}

const frote = document.getElementById("place_frote");
frote.classList.add("color");
frote.classList.remove("color");
