
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null; 
}
let numbers = [2, 7, 11, 15];
let target = 9;
let result = twoSum(numbers, target);
if (result) {
  console.log("Indices of the two numbers that add up to the target");
} else {
  console.log("No two numbers add up to the target " );
}

