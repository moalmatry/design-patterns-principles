interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteObserver implements Observer {
  constructor(private id: number) {}
  update(subject: Subject): void {
    console.log(
      `Observer ${this.id} has received a notification, current state is ${subject.getState()}`,
    );
  }
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  addObserver(observer: Observer): void {
    const isExists = this.observers.includes(observer);
    if (isExists) {
      console.log("Observer already exists");
      return;
    }
    this.observers.push(observer);
    console.log("Observer added successfully");
  }
  removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log("Observer does not exist");
      return;
    }
    this.observers.splice(observerIndex, 1);
    console.log("Observer removed successfully");
  }

  notifyObservers(): void {
    this.observers.forEach((obs) => obs.update(this));
  }
  getState(): number {
    return this.state;
  }
  setState(state: number): void {
    this.state = state;
    console.log("Setting Sate ....");
    this.notifyObservers();
  }
}

// client code
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver(1);

subject.addObserver(observer1);
const observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);
