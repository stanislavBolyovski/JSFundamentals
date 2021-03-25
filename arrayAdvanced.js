function sumFirstAndLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let result = first + last;
    console.log(result);
}

function negativeOrPositive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        } else {
            newArr.unshift(arr[i]);
        }
    }
    console.log(newArr.join("\n"));
}

function firstAndLastKNumbers(arr) {
    let k = arr[0];
    let first = arr.slice(1, k + 1);

    let last = arr.slice(-k);
    console.log(first.join(' '));
    console.log(last.join(' '));
}

function lastKNumbers(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let last = arr.slice(-k);

        for (let j = 0; j < last.length; j++) {
            sum += last[j];

        }
        arr.push(sum);
    }
    console.log(arr.join(' '));
}

function processOddNumbers(arr) {
    let newArr = [];
    for (let u = 0; u < arr.length; u++) {
        if (u % 2 !== 0) {
            arr[u] *= 2;
            newArr.unshift(arr[u]);
        }
    }
    console.log(newArr.join(' '));
}

function smallestTwo(arr) {
    let result = [];
    let smallest = Number.MAX_SAFE_INTEGER;
    let n = 0;

    while (true) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
        let index = arr.indexOf(smallest);
        if (index > -1) {
            arr.splice(index, 1);
        }
        result.push(smallest);
        n++;
        index = 0;
        smallest = Number.MAX_SAFE_INTEGER;
        if (n >= 2) {
            break;
        }
    }
    console.log(result.join(' '));
}

function listOfProducts(arr) {
    let newArr = arr.sort();
    for (let i = 0; i < newArr.length; i++) {
        let index = i + 1;
        console.log(`${index}.${newArr[i]}`);
    }
}

function arrayManipulations(arr, a, b, c, d) {
    function add(a) {
        arr.push(a);
    }
    console.log(arr);
}

arrayManipulations(['4 19 2 53 6 43',
    "Add 3",
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);