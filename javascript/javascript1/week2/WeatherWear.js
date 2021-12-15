const clothes = {
  freezing: "Hat, Coat, Gloves, Scarf",
  cold: "Coat, Hat",
  mild: "Jumper, Jeans",
  warm: "T-shirt, Jeans",
  hot: "T-shirt, Shorts",
};

function temperature(num) {
  if (num <= 5) {
    return clothes.freezing;
  } else if (num <= 10) {
    return clothes.cold;
  } else if (num <= 15) {
    return clothes.mild;
  } else if (num <= 20) {
    return clothes.warm;
  } else {
    return clothes.hot;
  }
}
const weather = temperature(10);
console.log("You should wear: " + weather);
