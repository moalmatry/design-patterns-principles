abstract class Car {
  constructor(
    public model: string,
    public productionYear: number,
  ) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  displayCarInfo(): void {
    console.log(
      `This is a Sedan Model ${this.model}, Production Year ${this.productionYear}`,
    );
  }
}

class SUV extends Car {
  displayCarInfo(): void {
    console.log(
      `This is a SUV Model ${this.model}, Production Year ${this.productionYear}`,
    );
  }
}

class Hatchback extends Car {
  displayCarInfo(): void {
    console.log(
      `This is a Hatchback Model ${this.model}, Production Year ${this.productionYear}`,
    );
  }
}

class CarFactory {
  public createCar(
    type: "Sedan" | "SUV" | "Hatchback",
    model: string,
    productionYear: number,
  ): Car {
    switch (type) {
      case "Sedan":
        return new Sedan(model, productionYear);
      case "SUV":
        return new SUV(model, productionYear);
      case "Hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("Sedan", "BMW", 2020);
const suv = carFactory.createCar("SUV", "Kia", 2023);
const hatchback = carFactory.createCar("Hatchback", "wolk", 2022);

sedan.displayCarInfo();
suv.displayCarInfo();
hatchback.displayCarInfo();
