boughtCandyPrices = [];
function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    priceSweet = weight * 0.5;
    boughtCandyPrices.push(priceSweet);
  } else if (candyType === "chocolate") {
    priceChocolate = weight * 0.7;
    boughtCandyPrices.push(priceChocolate);
  } else if (candyType === "toffee") {
    priceToffee = weight * 1.1;
    boughtCandyPrices.push(priceToffee);
  } else if (candyType === "chewinggum") {
    priceChewingGum = weight * 0.03;
    boughtCandyPrices.push(priceChewingGum);
  }
}

addCandy("sweet", 50);
addCandy("toffee", 10);
addCandy("chocolate", 10);

console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;

let sumOfCandyPrices = 0;
for (let i = 0; i < boughtCandyPrices.length; i++) {
  sumOfCandyPrices += boughtCandyPrices[i];
}
console.log(sumOfCandyPrices);
const totalprice = sumOfCandyPrices;

function canBuyMoreCandy(totalprice) {
  if (amountToSpend > sumOfCandyPrices) {
    console.log("You can buy more candy, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

canBuyMoreCandy(totalprice);
