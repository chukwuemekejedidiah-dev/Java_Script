const prompt = require('prompt-sync')();

let accountName = prompt("Enter account name:");
let depositAmount = Number(prompt("Enter amount to deposit:"));
let withdrawAmount = Number(prompt("Enter amount to withdraw:"))

let bankAccount = {
  accountName: accountName,
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }
};

bankAccount.deposit(depositAmount);
bankAccount.withdraw(withdrawAmount);

console.log(`Account Name: ${bankAccount.accountName}`);
console.log(`Final Balance: ${bankAccount.balance}`);