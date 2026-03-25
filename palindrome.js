const prompt = require("prompt-sync")();

let num = prompt("Enter a five-digit number: ");

if (num.length != 5) {
    console.log("Error: Please enter a five-digit number");
}
else {

    if (num[0] == num[4] && num[1] == num[3]) {
        console.log("The number is a palindrome");
    }
    else {
        console.log("The number is not a palindrome");
    }

}









