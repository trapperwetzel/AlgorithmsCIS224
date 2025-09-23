const selectionsort = (nums) => {

    for(let i = 0; i < nums.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
    
}

const unstableBucketSort = (nums) => {
    const numberOfBuckets = Math.max(...nums.map(element => element[0]));
    const buckets = Array.from({length:numberOfBuckets + 1 }, () => []);
    
    // fill buckets
    for(const element of nums){
        console.log(element);
        buckets[element[0]].push(element);
    }

    let index = 0;
    for(const bucket of buckets){
        selectionsort(bucket);
        for(const element of bucket){
            nums[index++] = element;
        }
    }
    return nums;

}

const test = [[1,"a"],[3,"z"],[4,"b"],[3,"a"],[1,"c"]];
console.log(unstableBucketSort(test));
