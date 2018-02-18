// Sorting an array of numbers using an insertion sort algorithm. 
// This algorithm splits the array into a sorted and unsorted portion. 
// The sorted portion starts with the first element and goes up one with each iteration as
// new elements are accurately placed into the sorted section.
// The algorithm needs to check summation(N-1) iterations at worst. Big O: O(n^2)
// At best on an already sorted array it only needs to make n checks. Omega(n)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { // skip the first element as it's the start of our sorted portion
        insert = arr[i]; // save the element currently being looked at
        let j = i; // start at the current elements position
        while (j > 0 && (arr[j-1] > insert)) { // shift all elements in the sorted portion greater than the current element
            arr[j] = arr[j-1]; // shift element
            j = j - 1; // update j counter
        }
        arr[j] = insert; // when all greater elements have been shifted. Insert element into correct position
    }
    return arr;
}

/* Testing */
console.log(insertionSort([3,6,8,2,9,1]))
console.log(insertionSort([3,3,6,6,8,2,9,1]))
console.log(insertionSort([6,5]))
console.log(insertionSort([3]))
console.log(insertionSort([]))