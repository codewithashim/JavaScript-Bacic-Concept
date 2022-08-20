let lightTemes = document.getElementById("themes_icon_1");
let darkThemes = document.getElementById("themes_icon_2");

lightTemes.onclick = makeLight;
darkThemes.onclick = makeDark;

function makeLight() {
  document.body.style.backgroundColor = "whitesmoke";
}

function makeDark() {
  document.body.style.backgroundColor = "black";
}
