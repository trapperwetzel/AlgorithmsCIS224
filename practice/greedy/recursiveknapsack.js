const knapsackItemsArray = [
  { name: "gold", weight: 4, value: 9 },
  { name: "silver", weight: 3, value: 6 },
  { name: "bronze", weight: 2, value: 5 },
  { name: "lead", weight: 5, value: 4 },
  { name: "platinum", weight: 5, value: 15 },
  { name: "copper", weight:4,value: 6},
  { name: "mystery", weight:20, value:25}
];

// Write a function that takes a max weight as an argument
// Use backtracking find the max value of items that can be selected 
// while keeping the weight less than or equal to the max weight. 

const knapsack = (items, maxWeight) => {

    const values = [];


    const backtrack = (index, currentWeight, currentValue) => {

        if(currentWeight <= maxWeight){
            values.push(currentValue);
        }

        for(let i = index; i < items.length; i++){

            if(currentWeight + items[index].weight <= maxWeight){
                currentWeight += items[index].weight;
                currentValue += items[index].value;
                backtrack(i + 1, currentWeight, currentValue);
                currentWeight -= items[index].weight;
                currentValue -= items[index].value;
            }

        }
    }

    backtrack(0,0,0);
    const finalAnswer = Math.max(...values);
    return finalAnswer; 

}


const test1 = knapsack(knapsackItemsArray,15); 
const test2 = knapsack(knapsackItemsArray,25); 
console.log("knapsack test 1, should be 35: ",test1); // should be 35
console.log("knapsack test 2, should be 45: ",test2); // should be 45