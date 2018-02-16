// Fibonacci sequence till N both iteratively and recursively

function iFibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    let a = 1;
        b = 1;
    for (let i = 3; i <= n; i++) {
        var temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function iFibonacci2(n) {
    var fib = [0,1];
    for (let i = 1; i <= n; i++) {
        fib.push(fib[0] + fib[1]);
        fib.shift();
        // console.log(fib);
    }
    return fib[0];
}

function rFibonacci(n) {
    if (n <= 2) { 
        return 1;
    } else {
        return rFibonacci(n-1) + rFibonacci(n-2);
    }
}

/* Testing */
console.log('Iterative fibonacci is', iFibonacci(6))
console.log('Iterative fibonacci is', iFibonacci2(6))
console.log('Recursive fibonacci is', rFibonacci(6))