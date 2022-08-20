function paperRequarment(firstBook, secondBook, thirdBook) {
  let firstBookNeedPage = 100;
  let secondBookNeedPage = 200;
  let thirdBookNeedPage = 300;

  let firstBookTotalPage = firstBookNeedPage * firstBook;
  let secondBookTotalPage = secondBookNeedPage * secondBook;
  let thirdBookTotalPage = thirdBookNeedPage * thirdBook;

  let totalQuantity =
    firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;

  return totalQuantity;
}

let firstNum = 2;
let secondNum = 1;
let thirdNum = 6;
const userQuantity = paperRequarment(firstNum, secondNum, thirdNum);
console.log(userQuantity);
