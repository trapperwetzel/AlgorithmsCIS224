const mergesort = (nums) => {

    if(nums.length <= 1){
        return nums;
    }
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0,mid);
    const right = nums.slice(mid);
    return sortHelper(mergesort(left),mergesort(right));
}
const sortHelper = (left, right) => {
    const result = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}

const testarray = [9,1,4,3,8,5,2,7,10,6];
const test = mergesort(testarray);
console.log(test); 
