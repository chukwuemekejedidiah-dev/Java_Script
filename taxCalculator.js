const prompt = require("prompt-sync")();

for (let i = 1; i <= 3; i++) {

    let name = prompt("Enter citizen name: ");
    let earnings = Number(prompt("Enter yearly earnings: "));

    let tax;

    if (earnings <= 30000) {
        tax = earnings * 0.15;
    } else {
        tax = (30000 * 0.15) + ((earnings - 30000) * 0.20);
    }

    console.log("\nCitizen:", name);
    console.log("Total Tax: $" + tax.toFixed(2));
    console.log();
}