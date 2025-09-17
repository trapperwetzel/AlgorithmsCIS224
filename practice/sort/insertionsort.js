

// given a unsorted array return a sorted array using insertion sort


const insertionsort = (numbers) => {
    for(let i = 1; i < numbers.length; i++){
        for(let j = i; j >= 0; j--){
            if(numbers[j] < numbers[j-1]){
                const temp = numbers[j];
                numbers[j] = numbers[j-1];
                numbers[j-1] = temp;
                
            } else {
                break;
            }
        }
    }
}


const testarray = [9,1,4,3,8,5,2,7,10,6];
insertionsort(testarray);
console.log(testarray);