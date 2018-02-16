// Factorial of all numbers 1 - N both iteratively and recursively

function iFactorial(n) {
    let fact = n;
    for (let i = 1; i < n; i++) {
        fact = fact * i;
    }
    console.log('Iterative factorial is', fact);
}

function rFactorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * rFactorial(n-1);
}

/* Testing */
iFactorial(5)
console.log('Recursive factorial is', rFactorial(5))
