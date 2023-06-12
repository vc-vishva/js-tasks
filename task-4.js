const str = ['apple', 'banana', 'orange', 'apple', 'graphs', 'banana'];
function uniqueString(strings) {
  const uniqueStrings = [];

  for (let i = 0; i < strings.length; i++) {
    if (!uniqueStrings.includes(strings[i])) {
      uniqueStrings.push(strings[i]);
    }
  }

  return uniqueStrings;
}

console.log(uniqueString(str));

