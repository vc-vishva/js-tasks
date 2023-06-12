function sortChar(str) {
  let char = [];
  for (let i = 0; i < str.length; i++) {
    char.push(str[i]);
  }

  for (let i = 0; i < char.length; i++) {
    for (let j = i + 1; j < char.length; j++) {
      if (char[i] > char[j]) {
        let temp = char[i];
        char[i] = char[j];
        char[j] = temp;
      }
    }
  }

  let sortStr = "";
  for (let i = 0; i < char.length; i++) {
    sortStr += char[i];
  }

  return sortStr;
}

console.log(sortChar("viva"));
