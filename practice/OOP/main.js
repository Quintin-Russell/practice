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

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength)
    this.name = 'square';
    this.sideLength = sideLength;
    this.sides = 4;
  }
}

Square.prototype.calcArea = function() {
  return this.sideLength**2
}

const sq = new Square(15)

console.log('calcArea:', sq.calcArea())
