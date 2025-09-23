const insertionsort = (nums) => {
    for(let i = 1; i < nums.length; i++){
        for(let j = i; j > 0; j--){
            if(nums[j] < nums[j-1]){
                const temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
            }
        }
    }
    return nums;
}

const testarray = [9,1,4,3,8,5,2,7,10,6];
insertionsort(testarray);
console.log(testarray);