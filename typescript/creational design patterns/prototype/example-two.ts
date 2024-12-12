interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number,
  ) {
    super(properties);
  }

  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(
    properties,
    public radius: number,
  ) {
    super(properties);
  }

  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

const redRectangle = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20,
);

const clonedRedRectangle = redRectangle.clone();
clonedRedRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(clonedRedRectangle);