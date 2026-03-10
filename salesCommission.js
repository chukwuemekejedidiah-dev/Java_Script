const prompt = require("prompt-sync")();

let totalSales = 0;

while (true) {
    let itemPrice = Number(prompt("Enter item price (0 to stop): "));

    if (itemPrice === 0) {
        break;
    }

    totalSales += itemPrice;
}

let earnings = 200 + (0.09 * totalSales);

console.log("\nTotal Sales: " + totalSales);
console.log("Total Earnings: " + earnings);