/*
 Suppose you are given an n-element sequence, s, containing distinct integers that are listed in increasing
order. Given a positive integer k, write a recursive function to find if two integers in s have a difference
of k. If such a pair exists return them. If not, return None
*/

const findMatch = (nums, k) => {

    const findMatchHelper = (left, right) => {
        // base case
        if(right >= nums.length){
            return null;
        }

        const difference = nums[right] - nums[left]
        // if we find the match, return the pair of numbers.
        if(difference === k){
            return [nums[left], nums[right]]
        } else if (difference < k) { // This moves the right pointer because the difference is less then our target.
            return findMatchHelper(left,right + 1)
        }
        else{ // This moves the left pointer
            return findMatchHelper(left + 1, right);
        }

 
    }
    return findMatchHelper(0,1); // start
}

console.log(findMatch([1, 3, 5, 7, 10], 4)); // [1, 5]
console.log(findMatch([1, 3, 5, 7, 10,12,14,16], 2)); // [1, 3]
console.log(findMatch([1, 3, 5, 7, 10], 8)); // null