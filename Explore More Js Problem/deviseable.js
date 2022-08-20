/**
 * Show output 1-50
 *  if the number is diviseable by 3 then instead if the number show ' foo'
 *  if the number is diviseable by 5 then instead if the number show ' let abr'
 *  if the number is diviseable by 7 then instead if the number show ' bar '
 */

for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0 && i % 5 === 0) || i % 7 === 0) {
    console.log("Foo Bar");
  } else if (i % 3 === 0) {
    console.log("foo ");
  } else if (i % 5 === 0) {
    console.log("let bar");
  } else if (i % 7 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
