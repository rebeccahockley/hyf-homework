console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const unorderedList = document.querySelector("ul");
  for (let i = 0; i < products.length; i++) {
    let listItems = document.createElement("li");
    listItems.innerHTML =
      "<h1>" +
      products[i].name +
      "</h1>" +
      "<h2> Price: " +
      products[i].price +
      "</h2>" +
      "<h2> Rating: " +
      products[i].rating +
      "</h2>";
    unorderedList.appendChild(listItems);
  }
}

renderProducts(products);
