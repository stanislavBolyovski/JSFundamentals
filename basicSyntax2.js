function ages(years) {
    years = Number(years);
    if ((years >= 0) && (years <= 2)) {
        console.log('baby');
    } else if ((years >= 3) && (years <= 13)) {
        console.log('child');
    } else if ((years >= 14) && (years <= 19)) {
        console.log('teenager');
    } else if ((years >= 20) && (years <= 65)) {
        console.log('adult');
    } else if (years >= 66) {
        console.log('elder');
    }
}

function rounding(num, to) {
    to = Number(to);
    num = Number(parseFloat(num.toFixed(to)));
    console.log(num);
}


function division(num) {
    num = Number(num);
    if (num % 10 == 0) {
        console.log("The number is divisible by 10");
    } else if (num % 7 == 0) {
        console.log("The number is divisible by 7");
    } else if (num % 6 == 0) {
        console.log("The number is divisible by 6");
    } else if (num % 3 == 0) {
        console.log("The number is divisible by 3");
    } else if (num % 2 == 0) {
        console.log("The number is divisible by 2");
    } else {
        console.log("Not divisible");
    }
}

function vacation(numPeople, typePeople, day) {
    let price = 0;
    let discout;
    if (typePeople == "Students") {
        if (day == "Friday") {
            price = 8.45;
        } else if (day == "Saturday") {
            price = 9.80;
        } else if (day == "Sunday") {
            price = 10.46;
        }

        if (numPeople >= 30) {
            discout = 0.85 * price
        } else {
            discout = price;
        }


    } else if (typePeople == "Business") {
        if (day == "Friday") {
            price = 10.9;
        } else if (day == "Saturday") {
            price = 15.60;
        } else if (day == "Sunday") {
            price = 16;

            if (numPeople >= 100) {
                discout = -10 * price;
            } else {
                discout = price;
            }
        }

    } else if (typePeople == "Regular") {
        if (day == "Friday") {
            price = 15;
        } else if (day == "Saturday") {
            price = 20;
        } else if (day == "Sunday") {
            price = 22.5;
        }
        if ((numPeople >= 10) && (numPeople <= 20)) {
            discout = 0.95 * price
        } else {
            discout = price;
        }
    }
    let total = discout * numPeople
    console.log(`Total price: ${total.toFixed(2)}`);
}

function leapYear(year) {
    if (year % 4 == 0) {
        console.log("yes");
    } else {
        console.log('no');
    }
}


function printSum(fro, to) {
    let sum = 0;
    let result = '';
    for (let i = fro; i <= to; i++) {

        sum += i;
        result += i + ' ';

    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

function triangle(num) {
    let i = 1;
    let result = '';
    let flag = false;
    for (let row = 1; row <= i; row++) {
        for (let column = i; column <= row; column++) {
            for (let repeat = 1; repeat <= row; repeat++) {
                result += i + ' ';

            }
            if (i >= num) {
                flag = true;
                break;
            }

            i++;

        }
        if (flag) {
            break;
        }
        console.log(result);
        result = '';
    }
    console.log(result);
}

function multiplication(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}


function login(arr) {
    i = 0;
    let username = arr[i];
    let length = username.length - 1;
    let password = '';
    let tries = 0;
    let blocked;
    for (let k = length; k >= 0; k--) {
        password += username[k];
    }
    i++;
    while (arr[i] != password) {
        tries++;
        i++;
        if (tries >= 4) {

            blocked = true;
            break;
        }
        console.log('Incorrect password. Try again.');
    }
    if (blocked) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}

function bitCoin(arr) {
    let sum = 0;
    let priceBitcoin = 11949.16;
    let numBitcoin = 0;
    let total = 0;
    let firstBitcoiFlag = false;
    let firstBitcoinDay = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        arr[i] = Number(arr[i]);
        if (i == 2) {
            arr[i] *= 0.7;
        }
        sum += arr[i] * 67.51;
        total += sum;
        while (total >= priceBitcoin) {
            total -= priceBitcoin;
            numBitcoin++;
            while (firstBitcoiFlag == false) {
                firstBitcoinDay = i + 1;
                firstBitcoiFlag = true;
            }
        }
    }
    if (numBitcoin > 0) {
        console.log(`Bought bitcoins: ${numBitcoin}`);
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
        console.log(`Left money: ${total.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${numBitcoin}`);
        console.log(`Left money: ${total.toFixed(2)} lv.`);
    }
}