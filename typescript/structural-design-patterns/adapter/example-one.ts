class Rectangle {
  constructor(
    private width: number,
    private height: number,
  ) {}

  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

class Square {
  constructor(private side: number) {}

  getSide() {
    return this.side;
  }
  getArea() {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter {
  constructor(private square: Square) {}

  getWidth() {
    return this.square.getSide();
  }

  getHeight() {
    return this.square.getSide();
  }
  area() {
    return this.square.getArea();
  }
}

// Client Code

let square = new Square(5);
let rectangle = new SquareToRectangleAdapter(square);

console.log(rectangle.getWidth()); // Output: 5
console.log(rectangle.getHeight()); // Output: 5
