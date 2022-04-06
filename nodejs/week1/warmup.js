class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());
