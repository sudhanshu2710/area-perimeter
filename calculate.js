class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  getArea() {
    return this.breadth * this.length;
  }
}

class Square extends Rectangle {
  constructor(length, breadth) {
    super(length, breadth);
  }

  getPerimeter() {
    return 2 * this.length + 2 * this.breadth;
  }
}

const newSquare = new Square(4, 4);
console.log(newSquare.getArea());
console.log(newSquare.getPerimeter());
