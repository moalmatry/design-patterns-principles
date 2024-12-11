class Product {
  public id: string;
  public price: number;
  public description: string;

  constructor(id: string, price: number, description: string) {
    this.id = id;
    this.price = price;
    this.description = description;
  }

  display() {
    console.log(
      `Product ${this.id} has ${this.price} and description ${this.description}`,
    );
  }
}

class Book extends Product {
  public author: string;
  public title: string;
  constructor(
    id: string,
    price: number,
    description: string,
    author: string,
    title: string,
  ) {
    super(id, price, description);
    this.author = author;
    this.title = title;
  }

  display(): void {
    super.display();
    console.log(`Author ${this.author} Title:${this.title}`);
  }
}

class Electronic extends Product {
  public brand: string;
  public model: string;
  constructor(
    id: string,
    price: number,
    description: string,
    brand: string,
    model: string,
  ) {
    super(id, price, description);
    this.brand = brand;
    this.model = model;
  }

  display(): void {
    super.display();
    console.log(`Brand ${this.brand} Model:${this.model}`);
  }
}

const product = new Product("15", 50, "Luxury product");

product.display();

const book = new Book("20", 100, "Expensive book", "Author1", "Book1");
book.display();

const electronic = new Electronic(
  "30",
  200,
  "High-end electronic",
  "Brand1",
  "Model1",
);

electronic.display();
