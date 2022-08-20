function bestFirend(firends) {
  let myF = firends[0].length;
  let getMyBFirend = firends[0];
  for (let i = 1; i < firends.length; i++) {
    const maxF = firends[i].length;
    if (maxF > myF) {
      getMyBFirend = firends[i];
      myF = maxF;
    }
  }
  return getMyBFirend;
}

const myBFirends = ["rahim", "karim", "jamal", "kamal", "kuddusali"];
let myBestFirend = myBestF(myBFirends);
console.log("My Best Firend Is :", myBestFirend);
