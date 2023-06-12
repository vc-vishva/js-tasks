const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,3];

function sums(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

console.log(sums(numbers));
