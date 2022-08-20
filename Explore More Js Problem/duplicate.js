const names = [
  "abul",
  "karim",
  "rahim",
  "abul",
  "nasim",
  "habib",
  "habiba",
  "rahim",
];

function removeDuplicate(names) {
  const uniqe = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (uniqe.includes(name) === false) {
      uniqe.push(name);
    }
  }
  return uniqe;
}

const uniqeName = removeDuplicate(names);
console.log(uniqeName);
