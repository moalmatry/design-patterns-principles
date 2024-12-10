// shapes (Area , Perimeter)  implement single & simple function
// interface A Shape

interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

console.log("Area of Circle: ", calculateTotalArea(circle));
console.log("Area of Rectangle: ", calculateTotalArea(rectangle));
