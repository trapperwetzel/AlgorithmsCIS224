/*
Given a sequence (python list) of integers write a function that finds the int that occurs most frequently.
This function should run in O(n2) time.

*/


const getMostFrequent = (numbers) => {

    let maxFrequency = 0;
    let mostFrequent;
    for(let i = 0; i < numbers.length; i++){
        let tempCount = 0;
        for(let j = 0; j < numbers.length; j++){
            if(numbers[j] == numbers[i]){
                tempCount += 1;
            }
        }
        if(tempCount > maxFrequency){
            maxFrequency = tempCount;
            mostFrequent = numbers[i];
        }
    }

    return mostFrequent;
}

const example1 = [1,1,2,2,1];
const example2 = [1,2,1,4,1,5,2,4,5,3,2,3,2,4,5,5,5,5,1,1]

console.log(getMostFrequent(example1)); // will be 1
console.log(getMostFrequent(example2)); // will be 5