// Sorting an array of numbers using a Bubble Sort algorithm.
// This algorithm compares two elements and swaps if the greater one is before the lower one.
// With every iteration the correctly placed greater numbers 'bubble' up to the right. 
// Big O: O(n^2). Omega(n)
function bubbleSort(arr) {
    n = arr.length; // how many elements you want to sort through in the next iteration
    while (n != 0) { // keep sorting until no swaps are made
        var new_n = 0;
        for (let i = 1; i < n; i++) { // only want to check n elements inorder to prevent checking elements you know are already sorted
            if (arr[i-1] > arr[i]) {
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
                new_n = i; // updating new_n to where the last swap was made
            }
        }
        n = new_n;
        /* setting the n value to the last index where a swap was made. 
        You don't need to iterate any farther next time around since 
        everything after this point is already sorted.*/
    }
    return arr;
}

/* Testing */
console.log(bubbleSort([9,2,3,5,4]))
console.log(bubbleSort([9,2,3,2,3,5,4]))
console.log(bubbleSort([9,2]))
console.log(bubbleSort([9]))
console.log(bubbleSort([]))