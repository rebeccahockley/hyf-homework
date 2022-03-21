const productContainer = document.getElementById("products-container");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    this.currency = product.currency;
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    const searchedProduct = this.products.filter((product) =>
      product.name.toLowerCase().includes(productName)
    );
    return searchedProduct;
  }

  renderProducts() {
    this.products.forEach((product) => {
      const productList = document.createElement("p");
      productList.innerHTML = `${product.name}: ${product.price}`;
      productContainer.appendChild(productList);
    });
  }

  getTotal() {
    const totalPrice = this.products.reduce(
      (previousValue, nextProductValue) => previousValue + nextProductValue,
      0
    );
    const totalPricePara = document.createElement("p");
    totalPricePara.innerText = `Total price of shopping cart: ${totalPrice}`;
    productContainer.appendChild(totalPricePara);
  }

  getUser() {
    const randomUser = Math.floor(Math.random() * 10 + 1);
    return fetch(`https://jsonplaceholder.typicode.com/users/${randomUser}`)
      .then((response) => response.json())
      .then((data) => {
        const userNameContainer = document.getElementById("username-container");
        const userName = document.createElement("p");
        userName.innerHTML = data.name;
        userNameContainer.appendChild(userName);
      });
  }
}

const shoppingCart = new ShoppingCart();

const flatscreen = new Product("Flat-screen", 5000);
const car = new Product("Car", 20000);
const mobile = new Product("Mobile", 2000);
const sofa = new Product("Sofa", 10000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(car);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(sofa);

shoppingCart.getUser();
shoppingCart.renderProducts();
shoppingCart.searchProduct("car");
shoppingCart.removeProduct(mobile);
shoppingCart.getTotal();
console.log(shoppingCart.products);
