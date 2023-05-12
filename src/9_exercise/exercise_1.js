/* Requirement
# Wallet System
## Requirement
- See Balance
- Topup Balance
- Transfer Balance
## Data
- Balance: number
*/
let balance = 0;

// Liat Total Uang
console.log(`Your balance is ${balance}`);

// Topup
const topup1 = 10000;
balance = balance + topup1;

// Liat Total Uang
console.log(`Your balance is ${balance}`);

// Transfer
const transfer1 = 1000;

// Check balance is enough or not (IF Style)
// if (balance - transfer1 < 0) {
//   console.log("You cant transfer because your money is low");
// } else {
//   balance = balance - transfer1;
//   // Liat Total Uang
//   console.log(`Your balance is ${balance}`);
// }

// Check balance is enough or not (Switch style)
switch (true) {
  case balance - transfer1 < 0: {
    console.log("You cant transfer because your money is low");
    break;
  }
  default: {
    balance = balance - transfer1;
    // Liat Total Uang
    console.log(`Your balance is ${balance}`);
    break;
  }
}
