
// Write a function that takes an amount of change to be given and a list of integer (which are the coin values), and returns a dictionary containing how many of each coin to give in order to give the change
// with the fewest amount of coins

const greedyChange = (neededTotal, denominations) => {

  // Sort denominations from largest to smallest
  const sorted = [...denominations].sort((a, b) => b - a);

  const result = {};
  let remaining = neededTotal;

  for (const coin of sorted) {
    if (coin <= remaining) {
      const count = Math.floor(remaining / coin);
      result[coin] = count;
      remaining -= coin * count;
    }
  }

  // if can't get the exact amount.. return empty object
  if (remaining !== 0) {
    return {};
  }

  return result;
};

console.log(greedyChange(35,[3,7,8,12]));
console.log(greedyChange(35,[5,7,8,25]));
