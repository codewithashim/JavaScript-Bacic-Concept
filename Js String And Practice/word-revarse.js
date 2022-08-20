function revaseWord(str) {
  const word = str.split(" ");
  //   console.log(word);
  const result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  }
  const reversed = result.join(' ');
  return reversed;
}

const myStr = "im a good boy";
revaseWord(myStr);
