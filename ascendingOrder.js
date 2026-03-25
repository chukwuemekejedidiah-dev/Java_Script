

const prompt = require("prompt-sync")();
function sortAscending(sortArr) {
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length - i - 1; j++) {
      if (sortArr[j] > sortArr[j + 1]) {
        let sortedNum = sortArr[j];  
        sortArr[j] = sortArr[j + 1];
        sortArr[j + 1] = sortedNum;
      }
    }
  }
  return sortArr;
}
function sortDescending(sortArr) {
  for (let i = 0; i < sortArr.length; i++) {  
    for (let j = 0; j < sortArr.length - i - 1; j++) {
      if (sortArr[j] < sortArr[j + 1]) {
        let arrangedNum = sortArr[j];
        sortArr[j] = sortArr[j + 1];
        sortArr[j + 1] = arrangedNum;
      }
    }
  }
  return sortArr;
}
let array = [];
let numberOne = parseInt(prompt("Enter the first number: "));
let numberTwo = parseInt(prompt("Enter the second number: "));
let numberThree = parseInt(prompt("Enter the third number: "));
let numberFour = parseInt(prompt("Enter the fourth number: "));
let numberFive = parseInt(prompt("Enter the fifth number: "));
let numberSix = parseInt(prompt("Enter the sixth number: "));
let numberSeven = parseInt(prompt("Enter the seventh number: "));
let numberEight = parseInt(prompt("Enter the eighth number: "));
let numberNine = parseInt(prompt("Enter the ninth number: "));
let numberTen = parseInt(prompt("Enter the tenth number: "));

array = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberTen];
console.log("Original Array:", array);
console.log("Sorted in Ascending Order:", sortAscending([...array]));
console.log("Sorted in Descending Order:", sortDescending([...array]));


