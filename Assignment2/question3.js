/* Write a recursive function that takes an int n as input and returns the sum of all even numbers
from 0 to 2n.
*/ 

const evenSum = (n) => {

    // base case
    if(n == 0){
        return 0 
    }
    else{
        return 2 * n + evenSum(n-1);
    }

}

const test = evenSum(4)

console.log(test) 