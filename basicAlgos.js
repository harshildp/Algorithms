// Print 1-255
function print255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i)
    }
}

// Print odd from 1-1000
function printOdd() {
    for (let i = 1; i <= 1000; i+=2) {
        console.log(i)
    }
}

// Print odd sum from 1-5000
function sumOdd() {
    let sum = 0;
    for (let i = 1; i<=5000; i+=2) {
        sum += i;
    }
    console.log('Sum of odd numbers is', sum)
}

// Iterate and print array
function iterArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Find max value in array
function maxVal(arr) {
    let max;
    if (arr.length == 0) {
        max = null;
    } else {
        max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    console.log('Maximum value is', max);
}

// Find average
function average(arr) {
    let sum;
    if (arr.length > 0) {
        sum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            sum += arr[i];
        }
    }
    console.log('Average is', sum == null? null : sum / arr.length)
}

// Array with odd numbers
function oddArray() {
    let arr = [];
    for (let i = 1; i <= 255; i +=2) {
        arr.push(i);
    }
    console.log(arr);
}

// Greater than Y in an array
function greaterThan(arr, y) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    console.log(`Number greater than ${y} is ${count}`);
}

// Square values in an array
function square(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    console.log(arr);
}

// Eliminate negatives
function eliminateNeg(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// Max, min and average in an array
function stats(arr) {
    let min, max, sum;
    if (arr.length == 0) {
        min = max = sum = null;
    } else {
        min = max = sum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
            sum += arr[i];
        }
    }
    console.log(`Max is ${max}. Min is ${min}. Average is ${sum / arr.length}`)
}

// Shift left in array
function shiftLeft(arr) {
    if (arr.length > 0) {
        for (let i = 0; i < arr.length-1; i++) {
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = 0;
    }
    console.log(arr);
}
// random array of N elements
function randArray(N, upto) {
    let arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * (upto + 1)));
    }
    console.log(arr);
}

// Swap first and last in an array
function swap(arr) {
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
    console.log(arr);
}

// Reverse array
function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    console.log(arr);
}

// Insert X into Y
function insert(arr, x, y) {
    for (let i = y; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = x;
        x = temp;
    }
    arr.push(x);
    console.log(arr);
}

// Remove negatives from array
function removeNegatives(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            num++;
        } else {
            arr[i - num] = arr[i];
        }
    }
    while (num--) {
        arr.pop();
    }
    console.log(arr);
}
/* Testing */
// printOdd()
// sumOdd()
// iterArray([1,2,3,4,5])
// maxVal([11,1,32,-12])
// maxVal([])
// average([])
// average([1,2,3,4])
// oddArray()
// greaterThan([1,2,3,4,5,6],3)
// square([-1,2,6,-2])
// eliminateNeg([-1,2,6,-2])
// stats([-1,2,6,-2])
// stats([])
// shiftLeft([])
// shiftLeft([1])
// shiftLeft([1,2,3,4])
// randArray(5, 10)
// swap([1,2,3,4,5])
// reverse([1,2,3,4,5])
// reverse([1,2,3,4,5,6])
// insert([1,2,3,4,5],12,1)
removeNegatives([1,2,-3,4, -5, 6, -7,-7,8,10])

