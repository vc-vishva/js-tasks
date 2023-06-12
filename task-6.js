const numbers = [5, 3, 9, 10, 7, 2, ];

function findSmall(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i +1; j < numbers.length ; j++) {
      if (numbers[i] > numbers[j ]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  return numbers[1];
}
console.log(findSmall(numbers));
