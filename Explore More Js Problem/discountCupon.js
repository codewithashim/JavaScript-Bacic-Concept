/**
 * if ticket number is less then 100 per ticket price:100
 * if ticket nnumber is more then 100 , but less then 200 . firest 100 ticket will be 100/ticket 
   rest ticket will be 90tk
 * if you purches more then  200 ticket
    first 100 -----> 100tk
    101-200 -------> 90tk
    200+ ----------> 70tk
 */

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    let price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
}

let quantity = 50;
const totalDiscount = ticketPrice(quantity);

console.log(totalDiscount);
