function multiplyBy2(num) {
    console.log(num * 2);
}

function excellentGrade(grade) {
    if (grade >= 5.5) {
        console.log('Excellent')
    } else {
        console.log('Not excellent');
    }
}

function numbersFrom1To5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}

function numbersFromNto1(n) {
    while (n != 0) {
        console.log(n);
        n--;
    }
}

function numbersFromMtoN(n, m) {

    for (let i = n; i >= m; i--) {
        console.log(i);
    }

}


function studentInformation(name, age, grade) {
    age = Number(age);
    grade = Number(grade);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}


function monthPrinter(num) {
    switch (num) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log('Error!');
    }
}

function foreignLanguages(country) {
    switch (country) {
        case 'USA':
        case 'England':
            console.log("English");
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log("Spanish");
            break;
        default:
            console.log('unknown');
    }
}

function theatrePromotions(day, age) {
    price = 0;
    if ((age >= 0) && (age <= 18)) {
        if (day == "Weekday") {
            price = 12;
        } else if (day == "Weekend") {
            price = 15;
        } else {
            price = 5;
        }
    } else if ((age > 18) && (age <= 64)) {
        if (day == "Weekday") {
            price = 18;
        } else if (day == "Weekend") {
            price = 20;
        } else {
            price = 12;
        }
    } else if ((age > 64) && (age <= 122)) {
        if (day == "Weekday") {
            price = 12;
        } else if (day == "Weekend") {
            price = 15;
        } else {
            price = 10;
        }
    }
    console.log(`${price}$`);
}

function devisibleBy3() {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}


function sumOfOddNumbers(num) {
    let times = 0;
    let output = 1;
    let sum = 0;
    num = Number(num);
    while (times < num) {
        times++;
        console.log(output);
        sum += output;
        output += 2;
    }
    console.log(`Sum: ${sum}`)
}

sumOfOddNumbers(5)