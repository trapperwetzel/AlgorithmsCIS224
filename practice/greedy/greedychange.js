
// Write a function that takes an amount of change to be given and a list of integers (which are the coin values), 
// returns a hashmap containing how many of each coin to give in order to give the change with the fewest amount of coins.

// dividing the amount by the current coin gives us how many times that coin can go into the amount. 
// We use Math.floor to round down because we can't have half a coin. 
// Math.floor( 35 / 12 ) = 2 

const greedychange = (amount, coins) => {

  const sortedCoins = [...coins].sort((a,b) => b - a);
  const answer = {};
  for(const coin of sortedCoins){
    if(amount >= coin){
      const count = Math.floor( amount / coin );
      answer[coin] = count;
      amount -= coin * count; 
    }
  }

  return answer; 

}



const testarr = [3,7,8,12]
console.log("\nGreedy Change");
console.log(greedychange(35,testarr)) // Should be {12:2, 8:1, 3:1}
