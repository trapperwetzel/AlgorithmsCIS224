
// Write a function that takes a max weight as an argument, and uses backtracking to find the max value 
// of items that can be selected while keeping the weight less than or equal to the max weight. 
// Assume that there is at most one of each item

const knapsackItems = [
  { name: "gold", weight: 4, value: 9 },
  { name: "silver", weight: 3, value: 6 },
  { name: "bronze", weight: 2, value: 5 },
  { name: "lead", weight: 5, value: 4 },
  { name: "platinum", weight: 5, value: 15 },
  { name:"copper", weight:4, value: 6},
  { name:"mystery", weight:20, value:25}
];

const KnapSackMax = (items, maxWeight) => {
  const answers = [];

  const backtrack = (subArray, currentWeight, currentValue) => {
    if (currentWeight <= maxWeight) {
      answers.push(currentValue);
    }

    for (let i = 0; i < subArray.length; i++) {
      const currentItem = subArray[i];

      if (currentWeight + currentItem.weight <= maxWeight) {
        currentWeight += currentItem.weight;
        currentValue += currentItem.value;

        
        backtrack(subArray.slice(i + 1), currentWeight, currentValue);

        // backtrack
        currentWeight -= currentItem.weight;
        currentValue -= currentItem.value;
      }
    }
  };

  backtrack(items, 0, 0);
  return Math.max(...answers);
};

console.log(KnapSackMax(knapsackItems, 15));  
console.log(KnapSackMax(knapsackItems, 17));  
console.log(KnapSackMax(knapsackItems, 25));  