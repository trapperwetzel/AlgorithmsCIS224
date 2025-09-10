const knapsackItemsArray = [
  { name: "gold", weight: 4, value: 9 },
  { name: "silver", weight: 3, value: 6 },
  { name: "bronze", weight: 2, value: 5 },
  { name: "lead", weight: 5, value: 4 },
  { name: "platinum", weight: 5, value: 15 },
  { name: "copper", weight:4,value: 6},
  { name: "mystery", weight:20, value:25}
];

// Knapsack - greedy algorithm.
// Write a function that takes a max weight as an argument, and uses a heuristic to find the max value
// of items and the specific items that can be selected while keeping the weight less than or equal to the
// max weight. 


const greedyKnapsack = (items, maxWeight) => {

    const sortedItems = [...items].sort((a,b)=> b.value / b.weight - a.value / a.weight); // sort by highest value / weight ratio

    let currentValue = 0;
    let currentWeight = 0;
    let answerItems = [];

    for(const item of sortedItems){

        if(currentWeight + item.weight <= maxWeight){
            answerItems.push(item.name);
            currentWeight += item.weight;
            currentValue += item.value;
        }

    }
    return {answerItems, currentValue};
}



const test22 = greedyKnapsack(knapsackItemsArray,15);
const test23 = greedyKnapsack(knapsackItemsArray,17);
console.log("greedyKnapsack test 1, should be 35",test22);
console.log("greedyKnapsack test 2, should be 35",test23);
