const prompt = require("prompt-sync")();

let accountNumber = prompt("Enter account number: ");
let beginningBalance = Number(prompt("Enter beginning balance: "));
let charges = Number(prompt("Enter total charges this month: "));
let credits = Number(prompt("Enter total credits this month: "));
let creditLimit = Number(prompt("Enter allowed credit limit: "));


let newBalance = beginningBalance + charges - credits;

console.log("\nAccount Number:", accountNumber);
console.log("Credit Limit:", creditLimit);
console.log("New Balance:", newBalance);

if (newBalance > creditLimit) {
    console.log("Credit limit exceeded");
}