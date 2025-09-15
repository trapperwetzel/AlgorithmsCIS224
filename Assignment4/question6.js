/*
Given a sequence (python list) of integers write a function that finds the int that occurs most frequently.
This function should run in O(n log n) time.
Hint: You may use any number of helper functions.
*/

const getMostFrequent = (numbers) => {
  if (numbers.length === 0) return null;

  // This is what turns it into Big(n log n)
  numbers.sort((a, b) => a - b);

  
  let maxCount = 1;
  let currentCount = 1;
  let mostFrequent;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] == numbers[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1; 
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFrequent = numbers[i];
    }
  }

  return mostFrequent;
}

const example1 = [1,1,2,2,1];
const example2 = [1,2,1,4,1,5,2,4,5,3,2,3,2,4,5,5,5,5,1,1]

console.log(getMostFrequent(example1)); // will be 1
console.log(getMostFrequent(example2)); // will be 5