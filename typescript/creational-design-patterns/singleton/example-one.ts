class Singleton {
  private static instance: Singleton;
  private static _value: number;

  // Private constructor to restrict instantiation from outside of the class.
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const store = Singleton.getInstance();
const store2 = Singleton.getInstance();

store.value = 5;

console.log(store2.value);
console.log(store === store2);
