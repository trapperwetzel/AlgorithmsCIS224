/*
Write a function that takes a sequences of distinct positive integers as input, and returns the 5 largest
elements of the sequence. You may assume that any sequence used as input has at least 5 elements.
*/

/*
    hm,
    Feel like it as follows: 
    Find the largest number in the given array/sequence, and then store it in a variable or something to reference.
    Now we loop over and find the largest element not equal to that, and repeat until we get our 5 largest elements.

*/

// NO BUILT IN FUNCTIONS FOR SORTING OR MAX
const findFiveLargestNumbers = (numbers) => {
    
    let largestNumbers = [];
    
    // make an array that is gonna be are return array, we push each "max" to that arary. 
    for(let i = 0; i < 5; i++) {
        let max = -Infinity
        
        for(let j = 1; j < numbers.length; j++){    
            if(numbers[j] > max && !largestNumbers.includes(numbers[j])){
                    max = numbers[j]
                }
            }
        
            largestNumbers.push(max);
    }

    return largestNumbers;
}

const testarray1 = [1,9,3,5,4,33,32,44,703]
const testarray2 = [900,200,10032,2,409,53,72,50,222,1,98,5,44444,13,2,77]

const testAnswer1 = findFiveLargestNumbers(testarray1);
const testAnswer2 = findFiveLargestNumbers(testarray2);
console.log("------------------------------------------------------------");
console.log("The first array largest numbers are: ", testAnswer1);
console.log("------------------------------------------------------------");
console.log("The second array largest numbers are: ", testAnswer2);
console.log("------------------------------------------------------------");




    






