console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  const unorderedList = document.querySelector("ul");
  unorderedList.innerHTML = " ";
  products.forEach((product) => {
    let li = document.createElement("li");
    li.innerHTML =
      "<h1>" +
      product.name +
      "</h1>" +
      "<h2> Price: " +
      product.price +
      "</h2>" +
      "<h2> Rating: " +
      product.rating +
      "</h2>";
    unorderedList.appendChild(li);
  });
}

renderProducts(products);

const inputFieldName = document.getElementById("inputBoxName");
inputFieldName.addEventListener("input", searchFunction);

function searchFunction(event) {
  const searchString = event.target.value.toLowerCase();
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchString)
  );
  console.log(searchString);
  console.log(filteredProduct);
  renderProducts(filteredProduct);
}

const inputFieldPrice = document.getElementById("inputBoxPrice");
inputFieldPrice.addEventListener("input", filterByPrice);

function filterByPrice(event) {
  const priceValue = event.target.value;
  if (priceValue) {
    const filteredPrice = products.filter(
      (product) => product.price <= priceValue
    );
    renderProducts(filteredPrice);
  } else {
    renderProducts(products);
  }
}

// event listener on INPUT, call function everytime that the user changes the value
// we need to get the value of their input and determine if it is
// allProducts => filter it => new array with only the products that INCLUDE the users input
// call another function, that takes the filtered array as the parameter
// and this function should appendChild to the body
// must remember to clear the ul item at the start of the 2nd function
// eg. ulName.innerHTML
