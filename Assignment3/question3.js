const knapsackItems = [
  { name: "gold", weight: 4, value: 9 },
  { name: "silver", weight: 3, value: 6 },
  { name: "bronze", weight: 2, value: 5 },
  { name: "lead", weight: 5, value: 4 },
  { name: "platinum", weight: 5, value: 15 },
  { name:"copper", weight:4, value: 6},
  { name:"mystery", weight:20, value:25}
];

// Knapsack - greedy algorithm.
// Write a function that takes a max weight as an argument, and uses a heuristic to find the max value
// of items and the specific items that can be selected while keeping the weight less than or equal to the
// max weight. Assume that there is at most one of each item

const GreedyKnapSack = (items, maxWeight) => {

    // sort items in descending order of value/weight 
    sortedSack = [...items].sort((a, b) => b.value / b.weight - a.value / a.weight);

    let totalWeight = 0;
    let totalValue = 0;
    const selectedItems = [];

    for (const item of sortedSack) {
        // If adding this item won't exceed the max weight, include it
        if (totalWeight + item.weight <= maxWeight) {
            selectedItems.push(item);
            totalWeight += item.weight;
            totalValue += item.value;
        }
    }

    return {
        totalValue,
        totalWeight,
        selectedItems
    };
};

console.log(GreedyKnapSack(knapsackItems,15));
console.log(GreedyKnapSack(knapsackItems,17));
console.log(GreedyKnapSack(knapsackItems,25));

