const readline = require('readline');


const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questionTwoX = (n) => {
    // this turns our input into a number (just incase, javascript can be weird sometimes)
    const number = Number(n);

    // f(n) = n**3 - 20n**2 + 121n - 185
    const X = (number ** 3) - (20 * number ** 2) + (121 * number) - 185;
    
    return X;
}

const questionTwoY = (n) => {
    // this turns our input into a number (just incase, javascript can be weird sometimes)
    const number = Number(n);

    // g(n) = n**2 - 3n
    const Y = (number ** 2) - 3 * number
    return Y;
}


const SolveQuestionTwo = () => {

    prompt.question("Enter the number to test or type 'quit' to quit: ", (number) => {
        if(number === "quit") {
            prompt.close();
        } else {
            
            const resultX = questionTwoX(number);
            const resultY = questionTwoY(number);
            console.log("Result for X: ", resultX);
            console.log("Result for Y: ", resultY);
            const compared = resultY > resultX ? "Y is bigger!" : "Y is smaller!(runs better)";
            console.log(compared);
            console.log("----------------------------------------")
            SolveQuestionTwo();
        }
    });

}

SolveQuestionTwo();


// I used this loop to test further, this made it easier to see how it swapped from Y being better to X being better, back to Y.

const testQuestion2 = (start, count) => {
    for (let n = start; n < start + count; n++) {
        number = Number(n);
        const resultX = questionTwoX(number);
        const resultY = questionTwoY(number);
        
        const compared = resultY > resultX ? "Y is bigger!" : "Y is smaller!(runs better)";
        console.log(compared);
        console.log(`n = ${n} X = ${resultX} Y = ${resultY}`);
    }
};
