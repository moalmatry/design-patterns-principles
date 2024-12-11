class Animal {
  constructor(public name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(public name = "dog") {
    super(name);
  }
}

let myDog = new Dog();
myDog.move(10);
