
/* 
Given an array lyst of unique elements, return all possible subsets (the power set). 
The solution set must not contain duplicate subsets. Return the solution in any order. 
Example 1:
Input: lyst = [1, 2, 3]
Output: [ [ ], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ]
*/ 

const subsets = (nums) => {

    const answer = [[]];

    const backtrack = (index, currentArray) => {
        
        for(let i = index; i < nums.length; i++) {
            currentArray.push(nums[index]);
            answer.push([...currentArray]);
            backtrack(i+1, currentArray);
            currentArray.pop();
        }

    }

    backtrack(0,[]);
    return answer;
}

const test = [1,2,3];
const test2 = ['a'];

console.log(subsets(test));
console.log(subsets(test2));
