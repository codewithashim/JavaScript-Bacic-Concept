const lyrix =
  "Tumi bondhu kala pakhi Ami jeno ki Bosonto kaale tomay Bolte parini";

const serchString = "kala";
const convLower = serchString.toLowerCase();
const leyrixlower = lyrix.toLowerCase();
const findData = leyrixlower.includes(convLower);
console.log(findData);

const onlineConv = lyrix.toLowerCase().includes(serchString.toLowerCase());
console.log(onlineConv);

const toFinde = lyrix.includes("pakhi");
console.log(toFinde);

// ======================================Index of=======================================

console.log(lyrix.indexOf("pakhi"));

if (lyrix.toLowerCase().indexOf("Ami") !== -1) {
  console.log("This value is exsist ");
} else {
  console.log("this is not exit id var ");
}

// ======================Starts With=============================

console.log(lyrix.startsWith("Tumi"));

// ========================End With=========================================

const fileName = "MyDos.pdf";
fileName.endsWith(".pdf");
