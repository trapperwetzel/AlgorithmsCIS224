const bucketsort = (nums) => {

    const numberOfBuckets = Math.max(...nums.map(element => element[0]));
    const buckets = Array.from({length: numberOfBuckets +1},() => []);

    for(const element of nums){
        buckets[element[0]].push(element);
    }
    let position = 0;
    for(const bucket of buckets){
        for(const element of bucket){
            nums[position] = element;
            position++;
        }
    }

    return nums;
}





const test = [[1, "a"], [3, "z"], [4, "b"], [3, "a"], [1, "c"]];
console.log(bucketsort(test));
