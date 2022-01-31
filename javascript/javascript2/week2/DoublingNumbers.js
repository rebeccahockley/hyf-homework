let numbers = [1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers[i] = numbers[i] * 2;
//   }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

const oddDoubledNumbers = numbers.filter((x) => x % 2 === 1).map((x) => x * 2);

console.log(oddDoubledNumbers);
