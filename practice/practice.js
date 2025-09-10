
// Write a function that takes a max weight as an argument
// Use backtracking find the max value of items that can be selected while keeping the weight less than or equal to the max weight. 
const knapsackItemsArray = [
  { name: "gold", weight: 4, value: 9 },
  { name: "silver", weight: 3, value: 6 },
  { name: "bronze", weight: 2, value: 5 },
  { name: "lead", weight: 5, value: 4 },
  { name: "platinum", weight: 5, value: 15 },
  { name: "copper", weight:4,value: 6},
  { name: "mystery", weight:20, value:25}
];

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
  const answer = Math.max(...values);
  return answer; 

}




 const test1 = knapsack(knapsackItemsArray,15); 
 const test2 = knapsack(knapsackItemsArray,25); 
console.log(test1); // should be 35
console.log(test2); // should be 45




// Knapsack - greedy algorithm.
// Write a function that takes a max weight as an argument, and uses a heuristic to find the max value
// of items and the specific items that can be selected while keeping the weight less than or equal to the
// max weight. Assume that there is at most one of each item. 


const greedyKnap = (items, maxWeight) => {

  const answer = []; 

  const sortedItems = [...items].sort(
    (a,b) => b.value / b.weight - a.value / a.weight
  );

  let totalWeight = 0;
  let totalValue = 0;

  for(const item of sortedItems){
    if(totalWeight + item.weight <= maxWeight){
      answer.push(item.name);
      totalWeight += item.weight;
      totalValue += item.value;
    }
  }
  

  return {answer, totalValue}

}



const test22 = greedyKnap(knapsackItemsArray,15);
const test23 = greedyKnap(knapsackItemsArray,17);
console.log("greedyKnapsack test 1",test22);
console.log("greedyKnapsack test 2",test23);



// Write a function that takes an amount of change to be given and a list of integer (which are the coin values), 
// and returns a dictionary containing how many of each coin to give in order to give the change with the fewest amount of coins.

//  dividing the amount by the current coin gives us how many times that coin can go into the amount. 
// We use Math.floor to round down because we can't have half a coin. 
// Math.floor( 35 / 12 ) = 2 

const greedyChange = (amount, coins) => {

  coins.sort((a,b) => b - a ); // sort reverse so it is sorted greatest to largest
  
  const change = {}

  for(const coin of coins){   // for each coin inside of the sorted array of coins 
    if(amount >= coin){ // if the remaining amount is greater then the value of the coin. 
      const count = Math.floor( amount / coin )  //  dividing the amount by the current coin gives us how many times that coin can go into the amount. We use Math.floor to round down because we can't have half a coin. Math.floor( 35 / 12 ) = 2 
      change[coin] = count; 
      amount -= coin * count      
    }
    
  }
  
  return change
}



const testarr = [3,7,8,12]
console.log("\nGreedy Change");
console.log(greedyChange(35,testarr))


