// Sorting an array of numbers using a quick sort algorithm.
// The quick sort chooses the first value as a pivot and pushes numbers lower than
// it into a left array and numbers greater into a right array. The algorithm
// recursively repeats these steps on the left and right arrays always returning a
// concating result of left + pivot + right. Big O: O(n^2). Omega(nlog(n))
// Space complexity: O(log(n))
function quickSort(arr) {
    if (arr.length <= 1) { // return if the array is empty or single valued
        return arr;
    }
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) { // check all elements except the first which is our pivot
        if (arr[i] < arr[0]) { // push left if lower value than pivot
            left.push(arr[i]);
        } else { // otherwise push right
            right.push(arr[i]);
        }
    }
    // recursively call sort on both sides. concat the results left + pivot + right
    return quickSort(left).concat(arr[0]).concat(quickSort(right))
}

/* Testing */
console.log(quickSort([2,5,9,1,4,6]))
console.log(quickSort([2,5,9,2,4,4,6]))
console.log(quickSort([2,1]))
console.log(quickSort([2]))
console.log(quickSort([]))