const prompt = require('prompt-sync')();

let numbers = [];

for (let i = 0; i < 10; i++) {
  let num = prompt("Enter a number: ");
  numbers.push(parseFloat(num));
}

console.log("You entered: ", numbers);

// Calculate mean
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let mean = sum / numbers.length;
console.log("Mean: ", mean);

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let sortedNumbers = sortArray(numbers.slice());
let mid = Math.floor(sortedNumbers.length / 2);
let median = sortedNumbers.length % 2 === 0 ? (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2 : sortedNumbers[mid];
console.log("Median: ", median);


// Calculate mode
let frequency = {};
for (let i = 0; i < numbers.length; i++) {
  if (frequency[numbers[i]]) {
    frequency[numbers[i]]++;
  } else {
    frequency[numbers[i]] = 1;
  }
}
let maxFrequency = 0;
let mode;
for (let num in frequency) {
  if (frequency[num] > maxFrequency) {
    maxFrequency = frequency[num];
    mode = num;
  }
}
console.log("Mode: ", mode);