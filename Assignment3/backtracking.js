// This just creates a sum function similar to python
// We are using this because it is easier to translate over the code from class. 


function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}


const sumOfSubset = (arr, target) => {
   const answer = [];
   const candidate = [];
   
   const backtrack = (subarray) => { 
        if(sum(candidate) === target){
            answer.push([...candidate]);
        }

        for(let i = 0; i < subarray.length; i++){
            const current = subarray[i];
            
            if(sum(candidate) + current <= target){
                candidate.push(current);
                
                backtrack(subarray.slice(i+1), i+1);
                candidate.pop();

            }
        }

    }
   backtrack(arr);
   return answer;
}

const s = [2,3,4,5]
console.log(sumOfSubset(s,7))
