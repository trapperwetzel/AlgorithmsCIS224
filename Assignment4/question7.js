/*

Write a version of quick-sort that picks as the pivot the median of three randomly selected elements
in the sequence.

*/

const quicksort = (numbers) => {
    if(numbers.length <= 1) return numbers;


    const choosePivot = (array) => {
        let length = array.length;
        let choice1 = Math.floor(Math.random() * length);
        let choice2 = Math.floor(Math.random() * length);
        let choice3 = Math.floor(Math.random() * length);

        let a = array[choice1], b = array[choice2], c = array[choice3];

        // This gives us the median value which optimizes quick sort.
        if ((a > b) !== (a > c)) return a;
        else if ((b > a) !== (b > c)) return b;
        else return c;
    }
    // choose our pivot
    const pivot = choosePivot(numbers);

    const left = [];
    const right = [];
    const equal = [];

    for(let number of numbers) {
        if(number < pivot){
            left.push(number);
        } else if( number > pivot) {
            right.push(number);
        } else {
            equal.push(number);
        }
    }
    
    return [...quicksort(left), ...equal, ...quicksort(right)];
}
const example1 = [10,2,7,3,9,14,1,5];
const example2 = [38, 77, 12, 45, 66, 54, 68, 42, 93, 51, 20, 74, 72, 83, 49, 63, 85, 60, 55, 34, 33, 6];

console.log(quicksort(example1));
console.log(quicksort(example2));