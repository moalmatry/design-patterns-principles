// Balance - hidden - encapsulated

class BankAccount {
  // encapsulated there is no way for the client to change the balance
  private _balance: number;
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter for balance
  public get balance() {
    return this._balance;
  }

  // Method Deposit Money
  public deposit(amount: number) {
    if (amount < 0) {
      console.log("Invalid amount");
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number) {
    if (amount < 0) {
      console.log("Invalid withdraw amount");
      return;
    } else if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(500);
console.log("current balance", myAccount.balance);
