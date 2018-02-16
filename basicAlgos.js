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

//
/* Testing */
// printOdd()
// sumOdd()
// iterArray([1,2,3,4,5])
// maxVal([11,1,32,-12])
// maxVal([])
// average([])
// average([1,2,3,4])
