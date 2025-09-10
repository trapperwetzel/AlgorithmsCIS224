// This just creates a sum function similar to python
// We are using this because it is easier to translate over the code from class. 

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
// const sumOfSubset = (arr, target) => {

//    const answer = [];
//    const candidate = [];
   
//    //recursive function 
//    const backtrack = (subarray) => { 
//         // basecase/check if we found the solution 
//         if(sum(candidate) === target){
//             answer.push([...candidate]);
//         }

//         for(let i = 0; i < subarray.length; i++){
//             const current = subarray[i];
            
//             if(sum(candidate) + current <= target){
//                 candidate.push(current);
//                 backtrack(subarray.slice(i+1));
//                 candidate.pop();

//             }
//         }

//     }
//    backtrack(arr);
//    return answer;
// }

// Given a list of positive integers arr and a target sum, 
// write a function that returns all subsets of arr whose elements sum up to exactly target.
// Each number in arr can be used at most once, and the result should not contain duplicate subsets 
// (order of numbers in a subset doesn't matter).


const SumSubSet = (arr, target) => {

    const answer = [];
    const candidate = [];

    const backtrack = (subarray) => {
        if(sum(candidate) === target){
            answer.push([...candidate]);
        }

        for(let i = 0; i < subarray.length; i++){
            const current = subarray[i]

            if(sum(candidate) + current <= target){
                candidate.push(current);
                backtrack(subarray.slice(i+1));
                candidate.pop();
            }
        }

    }

    backtrack(arr);
    return answer;


}




const s = [2,3,4,5]
const s1 = [5,6,9,11,3,7]
console.log(SumSubSet(s,7))
console.log(SumSubSet(s1,13))
