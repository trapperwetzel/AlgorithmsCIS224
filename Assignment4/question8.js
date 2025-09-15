
const fantabulousSort = (numbers) => {

    if(numbers.length  <= 10 ){
        // Insertion Sort 
        console.log("Using insertion sort");
        for(let i = 1; i < numbers.length; i++) {
            for(let j = i; j > 0; j--){
                if(numbers[j] < numbers[j-1]){
                    const temp = numbers[j];
                    numbers[j] = numbers[j-1];
                    numbers[j-1] = temp;
                } else {
                    break;
                }
            }
        }
        return numbers;
    }
    else if( numbers.length > 10){
        console.log("Using quick sort");
        // quicksort
        if (numbers.length <= 1) return numbers;

        let pivot = numbers[Math.floor(numbers.length / 2)];
        let left = [];
        let equal = [];
        let right = [];

        for(let number of numbers){
            if( number < pivot){
                left.push(number);
            } else if(number > pivot){
                right.push(number);
            } else {
                equal.push(number);
            }
        }
        return [
            ...fantabulousSort(left),
            ...equal,
            ...fantabulousSort(right)
        ];
    }

}
const example1 = [10,2,7,3,9,14,1,5];
const example2 = [38, 77, 12, 45, 66, 54, 68, 42, 93, 51, 20, 74, 72, 83, 49, 63, 85, 60, 55, 34, 33, 6];
const result = fantabulousSort(example1);
const result1 = fantabulousSort(example2);

console.log(result);
console.log(result1);
