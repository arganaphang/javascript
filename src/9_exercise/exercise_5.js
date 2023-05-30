/*
# Topup + Transfer Wallet
- Top up Wallet
- Transfer Wallet

# Entity
Account
  - username
  - name
  - amount
*/

let DATABASE = [];

function createAccount(username, name) {
  const newAccount = {
    username: username,
    name: name,
    amount: 500_000,
  };
  DATABASE.push(newAccount);
  return newAccount;
}

function topup(username, amount) {
  // ? Searching Algorithm
  for (let idx = 0; idx < DATABASE.length; idx++) {
    if (DATABASE[idx].username === username) {
      DATABASE[idx].amount += amount;
      break;
    }
  }
}

function transfer(from, to, amount) {
  // ? Searching Sender
  let sender = -1;
  for (let idx = 0; idx < DATABASE.length; idx++) {
    if (DATABASE[idx].username === from) {
      sender = idx;
      break;
    }
  }
  // ? Searching Receiver
  let receiver = -1;
  for (let idx = 0; idx < DATABASE.length; idx++) {
    if (DATABASE[idx].username === to) {
      receiver = idx;
      break;
    }
  }
  // ? Check if sender or receiver not found
  if (sender === -1 || receiver === -1) {
    console.log("Sender or Receiver not found");
    return;
  }
  DATABASE[sender].amount -= amount;
  DATABASE[receiver].amount += amount;
}

// ? Application

createAccount("adha", "Adha");
createAccount("john", "John Doe");
console.log(DATABASE);

transfer("adha", "john", 200_000);

console.log(DATABASE);

topup("adha", 400_000);

console.log(DATABASE);
