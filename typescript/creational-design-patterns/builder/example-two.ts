interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
  ) {}
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private phoneNumber: string = "";

  setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }
  setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }
  setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  build(): ICustomer {
    return new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber,
    );
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}

  buildMinimalCustomer(firstName: string, lastName: string, email: string) {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}

const builder = new CustomerBuilder();
const director = new CustomerDirector(builder);
const customer = director.buildMinimalCustomer(
  "Mohamed",
  "Almatry",
  "moalmatry2000@gmai.com",
);

console.log(customer);
