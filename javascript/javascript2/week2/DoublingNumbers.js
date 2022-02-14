let numbers = [1, 2, 3, 4];

const oddDoubledNumbers = numbers.filter((x) => x % 2 === 1).map((x) => x * 2);

console.log("The doubled numbers are " + oddDoubledNumbers);
