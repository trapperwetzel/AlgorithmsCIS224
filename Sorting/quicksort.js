const quicksort = (nums) => {
    if(nums.length <= 1){
        return nums;
    }
    const mid = Math.floor(nums.length / 2);
    const pivot = nums[mid];
    const left = [];
    const right = [];
    const equal = [];

    for(let number of nums){
        if(number < pivot){
            left.push(number);
        } else if(number > pivot){
            right.push(number);
        } else {
            equal.push(number);
        }

    }

    return [...quicksort(left),...equal,...quicksort(right)];
}

const example1 = [9,1,4,3,8,5,2,7,10,6];
console.log(quicksort(example1));
const quicksort2 = (nums1, nums2) => {
    const fullArray = [...nums1,...nums2]
    return [...quicksort(fullArray)];
}

const example2 = [9,1,4,3,8,5,2,7,10,6,3,55,66,77,7777];
const example3 = [9,1,4,3,8,5,2,7,10,666,420,321,123];
console.log(quicksort2(example2,example3));