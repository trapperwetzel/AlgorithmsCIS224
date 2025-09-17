

const selectionsort = (nums) => {

    for(let i = 0; i < nums.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[minIndex] ){
                minIndex = j;
            }
        }
        //swap
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
}

const testarray = [9,1,4,3,8,5,2,7,10,6];
console.log(selectionsort(testarray));