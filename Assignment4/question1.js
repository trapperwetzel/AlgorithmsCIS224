/*
Write a insertion sort function that modifies a python list in-place and returns the total amount of
inversions that took place.

This seems pretty easy, just do the insertion sort, and have a count. If we end up having to sort, just +1 to the count.

*/

const insertionSortSum = (numbers) => {

    let count = 0;
    for(let i = 1; i < numbers.length; i++){
        for(let j = i; j > 0; j--){
            if(numbers[j] < numbers[j-1]){
                const temp = numbers[j];
                numbers[j] = numbers[j-1];
                numbers[j-1] = temp;
                count ++;
            } else{
                break;
            }
        }
    }

    return count;

}


const example1 = [10,2,7,3,9,14,1,5];
const example2 = [38, 77, 12, 45, 66, 54, 68, 42, 93, 51, 20, 74, 72, 83, 49, 63, 85, 60, 55, 34, 33, 6];

const result1 = insertionSortSum(example1);
console.log(example1); // this will be sorted
console.log(result1); // this will be 15

const result2 = insertionSortSum(example2); 
console.log(example2); // this will be sorted
console.log(result2); // this will be 124