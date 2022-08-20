function makeRed() {
  document.body.style.background = "red";
}

const makeBluebtn = document.getElementById("make_blue");
makeBluebtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.background = "blue";
}

const makePurplebtn = document.getElementById("make_purple");
makePurplebtn.onclick = function(){
  document.body.style.background='purple'
}
