class Shape {
constructor(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}
}

Shape.prototype.calcPerimeter = function () {
  return this.sides * this.sideLength
}

const shape = new Shape('square', 4, 10)

console.log('calcPerimerter:', shape.calcPerimeter())
