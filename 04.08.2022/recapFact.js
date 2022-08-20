function myFact(num) {
  let facetorial = 1;
  for (let i = 1; i <= num; i++) {
    facetorial = facetorial * i;
    // console.log(i , facetorial)
  }
  return facetorial;
}

const myFactOut = myFact(5);
console.log(myFactOut);
