const widthOfHouse = [8, 5];
const heightOfHouse = [10, 8];
const depthOfHouse = [10, 11];
const gardenSizeInM2 = [100, 70];
let volumeInMeters = widthOfHouse[0] * heightOfHouse[0] * depthOfHouse[0];

const housePricePeter = volumeInMeters * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const actualPricePeter = 2500000;

if (housePricePeter > actualPricePeter) {
  console.log(
    "The cost of Peter's house is " +
      housePricePeter +
      "." +
      " Peter is paying too much!"
  );
} else {
  console.log(
    "The cost of Peter's house is " +
      housePricePeter +
      "." +
      " Peter is paying too little!"
  );
}

let volumeInMeters = widthOfHouse[1] * heightOfHouse[1] * depthOfHouse[1];
const housePriceJulia = volumeInMeters * 2.5 * 1000 + gardenSizeInM2[1] * 300;
const actualPriceJulia = 1000000;

if (housePriceJulia > actualPriceJulia) {
  console.log(
    "The cost of Julia's house is " +
      housePriceJulia +
      "." +
      " Julia is paying too much!"
  );
} else {
  console.log(
    "The cost of Julia's house is " +
      housePriceJulia +
      "." +
      " Julia is paying too little!"
  );
}
