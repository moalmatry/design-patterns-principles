interface UserDetails {
  name: string;
  age: number;
  email: string;
}
interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const userOne = new ConcretePrototype({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
});

const userTwo = userOne.clone();

console.log(userOne);
console.log(userTwo);

console.log(userOne === userTwo);
