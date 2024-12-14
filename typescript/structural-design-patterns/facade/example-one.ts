class Grinder {
  grindBeads() {
    console.log("FGriding beans started....");
  }
}

class Boiler {
  boilWater() {
    console.log("Boiling water started....");
  }
}

class Brewer {
  brewCoffee() {
    console.log("Brewing coffee started....");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brew: Brewer,
  ) {}

  makeCoffee() {
    this.grinder.grindBeads();
    this.boiler.boilWater();
    this.brew.brewCoffee();
    console.log("Coffee is ready!");
  }
}

// Client code

const grinder = new Grinder();
const boiler = new Boiler();
const brew = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brew);

coffeeMaker.makeCoffee();
