function sigma(num) {
    num = Math.trunc(num);
    if (num < 1) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    return num + sigma(num-1);
}

function factorial(num) {
    num = Math.trunc(num);
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num-1);
}

function fibo(target, num=1, memo=0, count=1) {
    target = Math.trunc(target);
    if (target <= 0) {
        return 0;
    }
    if (count === target) {
        return num;
    }
    count++;
    return fibo(target, num+memo, num, count);
}

function binarySearch(arr, target) {
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) {
        return true;
    }
    else if (arr.length === 1 || (arr.length === 2 && target > arr[mid])) {
        return false;
    }
    let search = target > arr[mid] ? arr.splice(mid + 1, arr.length - 1 - mid) : arr.splice(0, mid);
    return binarySearch(search, target);
}

function gcf1(a, b) {
    if (a % b == 0) {
        return b;
    }
    else {
        return gcf1(b, a % b);
    }
}

function gcf2(a, b) {
    if (a == b) {
        return a;
    }
    else if (a > b) {
        return gcf2(a-b, b);
    }
    else {
        return gcf2(a, b-a);
    }
}

function floodfill(matrix, x, y, color, target = matrix[y][x]) {
    matrix[y][x] = color;
    if (x > 0 && matrix[y][x-1] === target) {
        floodfill(matrix, x-1, y, color, target);
    }
    if (x < matrix[y].length-1 && matrix[y][x+1] === target) {
        floodfill(matrix, x+1, y, color, target);
    }
    if (y > 0 && matrix[y-1][x] === target) {
        floodfill(matrix, x, y-1, color, target);
    }
    if (y < matrix.length-1 && matrix[y+1][x] === target) {
        floodfill(matrix, x, y+1, color, target);
    }
}


/* Testing */

console.log(gcf1(10,13));
console.log(gcf1(24,18));
console.log(gcf2(10,13));
console.log(gcf2(24,18));
let test = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(test, 4));
console.log(binarySearch(test, 15));
// console.log(sigma(5));
// console.log(sigma(10));
// console.log(factorial(3));
// console.log(factorial(7));
// console.log(fibo(3));
// console.log(fibo(6));

// var test_matrix = [
//     [0,1,2],
//     [1,1,1],
//     [2,1,0]
// ];

// floodfill(test_matrix, 1, 1, 2);
// console.log(test_matrix);
