/*######################################
~~~~~~~~~~~~~~~~ Sorting ~~~~~~~~~~~~~~~
######################################*/
function bubbleSort(arr) {
    var count = 0;
    var swap = 0;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = arr.length - i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                swap++;
                // ^^ same as below
                /*  let temp = arr[j - 1];
                 arr[j - 1] = arr[j];
                 arr[j] = temp; */
            }
            count++;
        }
    }
    console.log('Loop iterations: ' + count)
    console.log("Swaps: " + swap)
    return arr;
}

function bubbleSort1(arr) {
    n = arr.length;
    var count = 0;
    var swap = 0;
    while (n != 0) {
        new_n = 0;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                new_n = i;
                swap++;
            }
            count++;
        }
        n = new_n;
    }
    console.log('Loop iterations: ' + count)
    console.log("Swaps: " + swap)
    return arr;
}

function selectionSort(arr) {
    var swap = 0;
    var count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
            count++;
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
            swap++;
        }
        // ^^ same as below
        /*  let temp = arr[i]
         arr[i] = arr[min]
         arr[min] = temp */
    }
    console.log('Loop iterations: ' + count)
    console.log("Swaps: " + swap)
    return arr;
}

// Testing Zone
array = [1, 2, 6, 5, 9, 0, -1, 3]
arr = bubbleSort(array)
console.log(arr) // Should output [-1,0,1,2,3,5,6,9]

// array = [10, 2, 7, 5, 9, 4, -1, -3]
array = [1, 2, 6, 5, 9, 0, -1, 3]
arr = selectionSort(array)
console.log(arr) // Should output [-3,-1,2,4,5,7,9,10]

// array = [11, 10, -6, 5, 8, 0, 1, -3]
array = [1, 2, 6, 5, 9, 0, -1, 3]
arr = bubbleSort1(array)
console.log(arr) // Should output [-6,-3,0,1,5,8,10,11]