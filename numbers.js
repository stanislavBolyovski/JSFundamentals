function numbers(str) {
    let arr = str.split(' ').sort(function(a, b) { return b - a }).splice(0, 5);
    let avrg = 0;
    let length;
    ley = array = str.split(' ');
    for (const stringNum of array) {
        let number = Number(stringNum)
        length = array.length;
        avrg += number;
    }
    avrg = avrg / length;
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i]);
        if (number > avrg) {
            resultArr.push(number);
        }
    }
    if (array.length < 5) {
        return 'No';
    } else {
        return resultArr.join(' ')
    }
}

console.log(numbers('-1 -2 -3 -4 -5 -6'));