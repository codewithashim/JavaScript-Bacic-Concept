function minitToHourConv(data) {
  let num = data;
  let hour = num / 60;
  let rhours = Math.floor(hour);
  let minte = (hour - rhours) * 60;
  let rminite = Math.round(minte);
  //   let second = minte * 60;
  let second = (minte - rminite) * 60;
  let rsecond = Math.round(second);
  return (
    num +
    "Minite = " +
    rhours +
    "Hour (h)" +
    rminite +
    "minte (m)" +
    rsecond +
    "Second (s)"
  );
}

let number = 250;
const convT = minitToHourConv(number);
console.log(convT);

function hourToMiniteSec(userData) {
  let userInput = userData;
  let minite = userInput * 60;
  let second = minite * 60;

  return (
    userInput + "hour (h)=" + minite + "minite (m)" + second + "Second (s)"
  );
}

let userDataInput = 4;
const convertT = hourToMiniteSec(userDataInput);

console.log(convertT);
