// regular - 10
// premium - 20
// gold - 30

// NOTE: Wrong  not following OCP ❌
// class Discount {
//   giveDiscount(customerType: "premium" | "regular") {
//     if (customerType === "regular") {
//       return 10;
//     } else if (customerType === "premium") {
//       return 20;
//     } else {
//       return 10;
//     }
//   }
// }

// Implementing by applying OCP ✅
interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class Regular implements Customer {
  giveDiscount() {
    return 10;
  }
  addLoyaltyPoints(amountSpent: number) {
    return amountSpent;
  }
}
class Premium implements Customer {
  giveDiscount() {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number) {
    return amountSpent * 2;
  }
}

class Gold implements Customer {
  giveDiscount() {
    return 30;
  }
  addLoyaltyPoints(amountSpent: number) {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer) {
    return customer.giveDiscount();
  }
}

let premiumCustomer = new Premium();
let discount = new Discount();

console.log(discount.giveDiscount(premiumCustomer));
