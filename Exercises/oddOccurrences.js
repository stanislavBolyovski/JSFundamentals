function odd(str) {
    str = str.toLowerCase();
    let arr = str.split(' ');

    let obj = {};
    for (const element of arr) {
        obj[element] = 0;
        for (const part of arr) {
            if (element == part) {
                obj[element]++;
            }
        }
    }
    let finalObj = {};
    for (const key in obj) {
        let num = Number(obj[key])
        if (num % 2 !== 0) {
            finalObj[key] = obj[key];
        }
    }
    let finalArr = [];

    for (const key in finalObj) {
        finalArr.push(key);
    }
    console.log(finalArr.join(' '));




}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')