function concatenateName(fName, lName, delimiter) {
    console.log(`${fName}${delimiter}${lName}`);
}

function rightPlace(string, char, final) {
    //console.log(p.replace('dog', 'monkey'));
    let replaced = string.replace('_', `${char}`);
    if (replaced == final) {
        console.log(`Matched`);
    } else {
        console.log("Not Matched");
    }

}


function integerAndFlaot(a, b, c) {
    let sum = a + b + c
    let type = '';
    if (sum % 1 == 0) {
        type = `Integer`;
    } else {
        type = `Float`;
    }
    console.log(`${sum} - ${type}`);
}

function amazinNumber(num) {
    num = num.toString();
    let sum = 0;
    let number = 0;
    for (let index = 0; index < num.length; index++) {
        number = Number(num[index]);
        sum += number;
    }
    if (sum == 9) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

function gramophone(band, album, song) {
    let duration = (album.length * band.length) * (song.length / 2);
    console.log(`The plate was rotated ${Math.ceil(duration / 2.5)} times.`);
}

function fuelMoney(distance, passengers, price) {
    let fuel = (distance / 100) * 7;
    fuel += passengers * 0.1;
    console.log(`Needed money for that trip is ${(fuel*price).toFixed(3)}lv.`);
}

function centuriesToMinutes(n) {
    let years = n * 100;
    let days = Math.trunc(years * 36524);
    let hours = 24 * days;
    let minutes = 60 * hours;
    console.log(`${n} centuries = ${years} ` + ` years = ${days} days = ${hours} ` + ` = ${minutes} minutes`);
}

function specialNumbers(n) {
    let sum = 0;
    let s = 0;
    for (let i = 1; i <= n; i++) {
        sum = 0;
        s = i;
        while (s) {
            sum += s % 10;
            s = Math.floor(s / 10);
        }
        if ((sum == 5) || (sum == 7) || (sum == 11)) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

    }
}

function triplesLetters(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let letter = String.fromCharCode(97 + i);
                console.log(letter)

            }

        }

    }
}