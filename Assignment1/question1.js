const readline = require('readline');
/*
Okay so---
The number of operations executed by algorithm X is:
X = n log(n) + 5. 
The number of operations executed by algorithm Y is:
Y = 1/10 n^2 − 3n. 
Find the smallest n₀ (the starting point) such that X runs better than Y for all n ≥ n₀

Think we can just put both equations inside functions and then just test them against eachother?
Will need to use readline from node modules 

*/


const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const algorithmX = (n) => {
    const number = Number(n);
    // f(n) = n log(n) + 5
    const X = ( number * (Math.log2(number)) + 5 ); 
    
    return X;
}


const algorithmY = (n) => {
    const number = Number(n);

    // g(n) = 1/10 n^2 − 3n. 
    const Y = ( (0.1) * (number**2) - (3 * number) )

    return Y;
}

const SolveQuestionOne = () => {
    // get the inputs, run the equations, and get the results 
    
    prompt.question("Enter the number to test or type 'quit' to quit: ", (number) => {
        if(number === "quit") {
            prompt.close();
        } else {
             
            const resultX = algorithmX(number);
            const resultY = algorithmY(number);
            console.log("Result for X: ", resultX);
            console.log("Result for Y: ", resultY);
            const compared = resultX > resultY ? "X is bigger!" : "X is smaller!(runs better)";
            console.log(compared);
            console.log("----------------------------------------")
            SolveQuestionOne();

        }
    });
}

SolveQuestionOne();

/* Question 1 
    Answer: 97
    Explanation: 
    After creating the program above, I ran it and entered in a bunch of test numbers until I found the first one to make X the smaller result.
    I started from 500, went to 400, then 300, 200, then 100, and then jumped to n = 50 which made X the smaller result. 
    I then went from 50 to 60, then 70, then 80, then 90, so then I knew that the first number had to be between 90 and 100. 
    After I put in 97 (n = 97), it returned that X was the smaller value. 
    This means that it has to be 97.
*/




