function sum(arr) {
    let total = arr[0] + arr[arr.length - 1];
    console.log(total)
}


function dayOfWeek(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thurstay',
        'Friday', 'Saturday', 'Sunday'
    ];
    if (num >= 1 && num <= 7) {
        num -= 1;
        console.log(days[num]);
    } else {
        console.log('Invalid day!');
    }
}


function reverseArray(num, arr) {
    arr.length = num;
    let output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i]);
    }
    console.log(output);
}


function reverseArrStr(arr) {

    for (let i = 0; i <= arr.length / 2; i++) {
        let temp = '';
        temp = arr[i];
        temp = arr.length - arr[i];
        console.log(arr[i]);
    }
}



function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i of arr) {
        i = Number(i);
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum)
}

function ecenOddSum(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i of arr) {
        if (i % 2 == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    console.log(evenSum - oddSum)
}

function equalArr(arrA, arrB) {
    let equal = true;
    let sum = 0;
    for (let i = 0; i <= arrA.length - 1; i++) {
        arrA[i] = Number(arrA[i]);
        arrB[i] = Number(arrB[i]);
        sum += arrA[i];
        if (arrA[i] != arrB[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equal = false;
            break;
        }
    }
    if (equal) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}