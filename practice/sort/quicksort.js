
const quicksort = (numbers) => {
    if(numbers.length <= 1) {
        return numbers
    }

    const pivot = numbers[Math.floor(numbers.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for(let number of numbers){
        if(number < pivot){
            left.push(number);
        } else if(number > pivot){
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
