let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

// Comment this out if you want circles to appear around your mouse

function renderCircles() {
  const randomX = Math.floor(Math.random() * 1000);
  const randomY = Math.floor(Math.random() * 1000);
  const randomR = Math.floor(Math.random() * 50);
  const randomColor = "#" + parseInt(Math.random() * 0xffffff).toString(16);
  const c1 = new Circle(randomX, randomY, randomR, 0, 2 * Math.PI, randomColor);
  c1.draw();
}

setInterval(renderCircles, 100);

// Uncomment this so you can make the circles appear around your mouse

// window.addEventListener("mousemove", coordsFunc);

// function coordsFunc(event) {
//   mouseXCoord = event.clientX;
//   mouseYCoord = event.clientY;
// }

// let mouseXCoord = 0;
// let mouseYCoord = 0;

// function renderCircles() {
//   const randomX = mouseXCoord;
//   const randomY = mouseYCoord;
//   const randomR = Math.floor(Math.random() * 50);
//   const randomColor = "#" + parseInt(Math.random() * 0xffffff).toString(16);
//   const c1 = new Circle(randomX, randomY, randomR, 0, 2 * Math.PI, randomColor);
//   c1.draw();
// }

// setInterval(renderCircles, 100);
