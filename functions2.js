function smallest(a, b, c) {
    let smallest = Number.MAX_SAFE_INTEGER;
    let arr = [a, b, c];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    console.log(smallest);
}

function addAndSubstract(a, b, c) {

    function sum() {
        let summ = a + b;
        return summ;
    }

    function substract() {
        let result = sum() - c;
        return result;
    }
    console.log(substract());

}

function charactersInRange(a, b) {
    let start = Math.min(a.charCodeAt(), b.charCodeAt());
    let end = Math.max(a.charCodeAt(), b.charCodeAt());
    let result = '';
    for (let i = start + 1; i < end; i++) {

        result += String.fromCharCode(i) + ' ';
    }
    console.log(result);
}



function oddAndEvenSum(num) {
    let odd = 0;
    let even = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        number = Number(num[i]);
        if (number % 2 == 0) {
            even += number;
        } else {
            odd += number;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

function palindrome(arr) {

    let forward;
    let backward;

    for (let i = 0; i < arr.length; i++) {
        backward = forward.split("").reverse().join("");;
        if (forward === backward) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

function passwordValidator(pass) {


    function passwordLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function passwordConsistance(pass) {
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {

            } else {
                return false;
            }
        }
        return true;
    }

    function passwordDigits(pass) {
        let digits = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 48 && code <= 57) {
                digits++;
            }
        }
        if (digits >= 2) {
            return true;
        } else {
            return false;
        }
    }


    if (passwordLength(pass) && passwordConsistance(pass) && passwordDigits(pass)) {
        console.log('Password is valid');
    } else {
        if (!passwordLength(pass)) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!passwordConsistance(pass)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!passwordDigits(pass)) {
            console.log('Password must have at least 2 digits');
        }
    }
}

function NxNMatrrix(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += n + " ";
        }
        console.log(row);
    }
}

function perfectNumber(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

function loadingBar(n) {
    let percent = n;
    n = n / 10;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push('%');
    }
    n = 10 - n;
    for (let j = 0; j < n; j++) {
        arr.push('.');
    }
    if (percent !== 100) {
        console.log(`${percent}% [${arr.join("")}]`);
        console.log('Still loading...');
    } else {
        console.log(`${percent}% Complete!`);
        console.log(`[${arr.join("")}]`);
    }

}