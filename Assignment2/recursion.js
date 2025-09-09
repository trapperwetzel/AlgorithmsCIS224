

const factorial = (n) => {
    if (n == 0){
        return 1;
    }
    else{
        let value = n * factorial(n-1)
        return value; 
    }
}


console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

