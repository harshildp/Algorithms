// Binary search through an array both iteratively and recursively

function rBS(arr, num, min = 0, max = arr.length-1) {
    if (max < min) {
        return false;
    } else {
        let mid = Math.floor((max+min)/2);
        if (num < arr[mid]) {
            return rBS(arr, num, min, mid - 1);
        } else if (num > arr[mid]) {
            return rBS(arr, num, mid + 1, max);
        } else {
            return mid;
        }
    }
}

function iBS(arr, num) {
    let min = 0;
        max = arr.length-1;
    while (min <= max) {
        var mid = (Math.floor(min+max)/2);
        if (num < arr[mid]) {
            max = mid - 1;
        } else if (num > arr[mid]) {
            min = mid + 1;
        } else {
            return midpoint;
        }
    }
    return false;
}

/* Testing */
console.log('Recursive binary search is', rBS([1,3,5,7,9,11,13,14,19,22], 4))
console.log('Recursive binary search is', rBS([1,3,5,7,9,11,13,14,19,22], 14))
console.log('Iterative binary search is', rBS([1,3,5,7,9,11,13,14,19,22], 4))
console.log('Iterative binary search is', rBS([1,3,5,7,9,11,13,14,19,22], 14))