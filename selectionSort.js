// Sorting through an array of numbers using a selection sort algorithm.
// This algorithm finds the minimum value at every iteration and swaps it toward the front.
// This algorithm only takes N-1 swaps at the worst. With every pass -
// through it puts at least one element in its final spot. Big O: O(n^2). Omega(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // N-1 iterations will be needed at most
        let min = i; // start with i as the index for the minimum value
        for (let j = i + 1; j < arr.length; j++) { // don't need to check the i index
            if (arr[j] < arr[min]) {
                min = j; // if some arr[j] is lesser than arr[i] set the min index to j
            }
        }
        if (arr[i] != arr[min]) {
            [arr[i], arr[min]] = [arr[min], arr[i]]; // swap the minimum value with the current i
        }
    }
    return arr;
}

/* Testing */
console.log(selectionSort([4,5,7,2,3,9]))
console.log(selectionSort([9,8,7,6,5,4]))
console.log(selectionSort([5,4]))
console.log(selectionSort([2]))
console.log(selectionSort([]))