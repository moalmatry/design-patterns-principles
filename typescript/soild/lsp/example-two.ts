// Payment Processor
// Credit Card
// Debit Card
// Paypal

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment - ${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing debit card payment - ${amount}`);
  }
}

class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing paypal payment - ${amount}`);
  }
}

function executePayment(processor: PaymentProcessor, amount: number) {
  processor.processPayment(amount);
}

let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let payPalProcessor = new PaypalProcessor();

executePayment(creditCardProcessor, 500);
executePayment(debitCardProcessor, 1000);
executePayment(payPalProcessor, 700);
