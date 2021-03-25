function addAndSubstract(str, n) {
    let newStr = '';
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    console.log(newStr);
}

function grades(grade) {
    let discriptionAndGrade = gradeAndDiscription();
    console.log(`${discriptionAndGrade[0]} (${discriptionAndGrade[1]})`);

    function gradeAndDiscription() {
        let discription = '';
        if (grade < 3) {
            discription = "Fail";
            grade = 2;
        } else if (grade < 3.5) {
            discription = "Poor";
        } else if (grade < 4.5) {
            discription = "Good";
        } else if (grade < 5.5) {
            discription = "Very good";
        } else {
            discription = "Excellent";
        }
        return [discription, grade.toFixed(2)];
    }
}

function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    console.log(result);
}

function orders(product, n) {

    let result = (prices() * n).toFixed(2)
    console.log(result);

    function prices() {
        let price = 0;
        if (product == 'coffee') {
            price = 1.5;
        } else if (product == 'water') {
            price = 1;
        } else if (product == 'coke') {
            price = 1.4;
        } else if (product == 'snacks') {
            price = 2;
        }
        return price;
    }
}

function calculator(a, b, operator) {
    if (operator == 'multiply') {
        result = a * b;
    } else if (operator == 'divide') {
        result = a / b;
    } else if (operator == 'substract') {
        result = a - b;
    } else if (operator == 'add') {
        result = a + b;
    }
    console.log(result);
}


function signCheck(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];
    let negative = 0;
    let result;

    function positiveOrNegative() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                negative++;
            } else if (arr[i] == 0) {
                result = 'Positive';
                break;
            }
        }
        if (negative % 2 == 0 && result != 'Positive') {
            result = "Positive";
        } else if (negative % 2 !== 0 && result != 'Positive') {
            result = "Negative";
        }
        return result;
    }
    console.log(positiveOrNegative());
}