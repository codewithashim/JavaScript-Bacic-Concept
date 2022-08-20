function reverseStr(text) {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reverse = reverse + element;
    console.log(element, reverse);
  }
  return reverse;
}

const myStr = "Im Ashim Rudra Paul";
const reverce = reverseStr(myStr);
console.log("reversed out:", reverce);
