
const bubblesort = (nums) => {
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[j] > nums[j+1]){
                const temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
}



const testarray = [9,1,4,3,8,5,2,7,10,6];
bubblesort(testarray);
console.log(testarray);