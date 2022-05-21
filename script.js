// 1. Always Hungry 

function alwaysHungry(arr) {
    var x = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log(`yummy`);
            x = true;
        }
    }
    if (!x) {
        console.log(`I'm hungry`);
    }
}

alwaysHungry([3.14, 'food', 'pie', true, 'food']);
alwaysHungry([4, 1, 5, 7, 2]);

// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// 3. Better than average:

function betterThanAverage(arr) {
    var sum = 0; 
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = sum / arr.length;

    var count = 0;
    var a = 0;
    while (a < arr.length) {
        if (arr[a] > sum) {
            count++;
        }
        a++;
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// 4. Array reverse

function reverse(arr) {
    var temp = [];
    var x = arr.length;
    for (var i = 0; i < x; i++) {
        temp.push(arr.pop());
    }
    for (var i = 0; i < x; i++) {
        arr.push(temp[i]);
    }
    return arr;
}

var result = reverse(['a', 'b', 'c', 'd', 'e']);
console.log(result);

// 5. Fibonacci Array

function FibonacciArray(n) {
    var fibArr = [0, 1];
    // we do n-2 because 2 number are already given
    for (var i = 0; i < n-2; i++) {
        fibArr.push(fibArr[i] + fibArr[i+1]);
    }
    return fibArr;
}

var result = FibonacciArray(10);
console.log(result);