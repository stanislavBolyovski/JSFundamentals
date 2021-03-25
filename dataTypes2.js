function sumDigits(number) {
    number = number.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        numberr = Number(number[i]);
        sum += numberr;
    }
    console.log(sum);
}

function charsToString(a, b, c) {
    console.log(a + b + c);
}

function townInfo(town, pop, area) {
    console.log(`Town ${town} has population of ${pop} and area ${area} square km.`);
}


function metersToKm(m) {
    console.log((m / 1000).toFixed(2))
}

function poundsToDollars(pounds) {
    console.log((pounds * 1.31).toFixed(3));
}

function reversedChars(a, b, c) {
    console.log(`${c} ${b} ${a}`)
}

function lowerToUpper(str) {

    let lower = str.toLowerCase();
    if (lower == str) {
        console.log(`lower-case`);
    } else {
        console.log(`upper-case`);
    }
}