const knapsackItems = [
  { name: "gold", weight: 4, value: 9 },
  { name: "silver", weight: 3, value: 6 },
  { name: "bronze", weight: 2, value: 5 },
  { name: "lead", weight: 5, value: 4 },
  { name: "platinum", weight: 5, value: 15 },
  { name: "copper", weight: 4, value: 6 },
  { name: "mystery", weight: 20, value: 25 }
];

const KnapsackBacktrack = (items, maxWeight) => {
  let bestValue = 0;
  let bestCombo = [];

  const backtrack = (startIndex, currentWeight, currentValue, selectedItems) => {
    // if a valid solution, check if it's the best one
    if (currentWeight <= maxWeight) {
      if (currentValue > bestValue) {
        bestValue = currentValue;
        bestCombo = [...selectedItems];
      }
    }

    // explore
    for (let i = startIndex; i < items.length; i++) {
      const item = items[i];

      if (currentWeight + item.weight <= maxWeight) {
        selectedItems.push(item.name);
        // backtrack
        backtrack(
          i + 1,
          currentWeight + item.weight,
          currentValue + item.value,
          selectedItems
        );
        selectedItems.pop(); 
      }
    }
  };

  backtrack(0, 0, 0, []);

  return [bestValue, ...bestCombo];
};


console.log(KnapsackBacktrack(knapsackItems, 25));
console.log(KnapsackBacktrack(knapsackItems, 15));
console.log(KnapsackBacktrack(knapsackItems, 17));