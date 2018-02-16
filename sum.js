// Summation of all numbers 1 - N both iteratively and recursively 
function iSum(n) {
    let sum = n;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    console.log('Iterative sum is', sum);
}

function rSum(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + rSum(n-1);
    }
}

/* Testing */
iSum(5)
console.log('Recursive sum is', rSum(5))