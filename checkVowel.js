const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ");

let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
    let ch = word[i].toLowerCase(); // convert to lowercase
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        vowelCount++;
    }
}

console.log("Number of vowels in '" + word + "' is: " + vowelCount);

