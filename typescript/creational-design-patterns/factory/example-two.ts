abstract class PaymentProcessor {
  constructor(public amount: number) {}

  abstract processPayment(): void;
}

class Paypal extends PaymentProcessor {
  processPayment(): void {
    console.log(`paying ${this.amount} with paypal`);
  }
}

class Stripe extends PaymentProcessor {
  processPayment(): void {
    console.log(`paying ${this.amount} with stripe`);
  }
}

class Bank extends PaymentProcessor {
  processPayment(): void {
    console.log(`paying ${this.amount} via bank account`);
  }
}

class PaymentFactory {
  public createPayment(
    paymentMethod: "Paypal" | "Stripe" | "Bank",
    amount: number,
  ) {
    switch (paymentMethod) {
      case "Paypal":
        return new Paypal(amount);
      case "Stripe":
        return new Stripe(amount);
      case "Bank":
        return new Bank(amount);
      default:
        throw new Error("Invalid payment method");
    }
  }
}

const { createPayment } = new PaymentFactory();

const paypal = createPayment("Paypal", 500);
const stripe = createPayment("Stripe", 700);
const bank = createPayment("Bank", 1000);

paypal.processPayment();
stripe.processPayment();
bank.processPayment();
