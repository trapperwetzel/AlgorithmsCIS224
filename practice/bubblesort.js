
// given an unsorted array, use bubble sort to return a sorted array 

const bubblesort = (numbers) => {

    for(let i = 0; i < numbers.length; i++){
        for(let j =0; j < numbers.length - 1 - i; j++){
            if(numbers[j] > numbers[j+1]){
                const temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp; 
            }


        }
    }


}



const testarray = [9,1,4,3,8,5,2,7,10,6];
bubblesort(testarray);
console.log(testarray);