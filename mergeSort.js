// Sorting an array of numbers using a merge sort algorithm.
// The algorithm recursively splits the unsorted array into its smallest pieces.
// The merge algorithm then reassembles the list by merging/concating two unsorted arrays
// into a single sorted array. Big O: O(nlog(n)). Omega(nlog(n))
// Space wise its more demanding O(n)
function mergeSort(arr) {
    if (arr.length <= 1) { // return if the array has a single element or is empty
        return arr;
    }
    let mid = Math.floor(arr.length / 2); // find midpoint index of the list
    // recursively split the list into halves and call merge on them
    return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))
}

function merge(left, right) {
    let ret = []; // return array
    let lIndex = 0; // pointer for the left array
        rIndex = 0; // pointer for the right array
    while (lIndex < left.length && rIndex < right.length) { // keep going until one list is exhausted
        // push the lower value into ret and update the corresponding lists index
        if (left[lIndex] < right[rIndex]) {
            ret.push(left[lIndex]);
            lIndex++;
        } else {
            ret.push(right[rIndex]);
            rIndex++;
        }
    }
    // You don't know which list was exhausted first.
    // So concat the remainder of both onto ret. One of the two will be empty.
    return ret.concat(left.slice(lIndex)).concat(right.slice(rIndex)); // return sorted, merged array
}

/* Testing */
console.log(mergeSort([4,6,8,2,9,1]))
console.log(mergeSort([4,4,6,6,8,2,9,1]))
console.log(mergeSort([6,5]))
console.log(mergeSort([4]))
console.log(mergeSort([]))