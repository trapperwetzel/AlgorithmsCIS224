// given an array lyst of unique elements, return all possible subsets (the power set). The solution set
// must not contain duplicate subsets. Return the solution in any order.


const subsets = (nums) => {
    const answer = [];
    const current = [];

    const backtrack = (start) => {
        answer.push([...current]);
        for(let i = start; i <nums.length; i++) {
            current.push(nums[i]); // "choose"
            backtrack(i+1); // "explore"
            current.pop();
        }
    };

    backtrack(0);
    return answer;
}

console.log(subsets([1,2,3]));

