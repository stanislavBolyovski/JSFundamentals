function addAndSubtract(arr) {
    let originSum = 0;
    let newSum = 0;
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        arr[index] = Number(arr[index]);
        originSum += arr[index];
        if (arr[index] % 2 == 0) {
            arr[index] += index;
        } else {
            arr[index] -= index;
        }
        newSum += arr[index];
        newArr.push(arr[index]);
    }
    console.log(newArr)
    console.log(originSum);
    console.log(newSum);

}

function commonElements(arrA, arrB) {
    for (let index = 0; index < arrA.length; index++) {
        for (let j = 0; j < arrB.length; j++) {
            if (arrA[index] === arrB[j]) {
                console.log(arrA[index]);
            }
        }
    }
}

function mergeArrays(arrA, arrB) {
    newArr = [];
    for (let index = 0; index < arrA.length; index++) {
        if (index % 2 == 0) {
            arrA[index] = Number(arrA[index]);
            arrB[index] = Number(arrB[index]);
            newArr.push(arrA[index] + arrB[index]);
        } else {
            newArr.push(arrA[index] + arrB[index]);
        }
    }
    console.log(newArr.join(' - '));
}



function arrRotation(arr, n) {
    let first;
    let last;
    for (let i = 0; i < n; i++) {
        first = arr.shift();

        arr.push(first);
    }
    console.log(arr.join(" "))
}

function maxNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            arr.splice(i, 1);
        }
    }
    console.log(arr.join(' '))
}

maxNum([41, 41, 34, 20])