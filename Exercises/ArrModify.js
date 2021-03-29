function arrayModify(arr) {
    let newArr = arr.splice(0, 1).join(' ').split(' ');

    for (const line of arr) {
        let [command, a, b] = line.split(' ');
        a = Number(a);
        b = Number(b);
        if (command == 'swap') {
            newArr.splice(a, 1, newArr.splice(b, 1, newArr[a])[0]);
        } else if (command == 'multiply') {
            let result = newArr[a] * newArr[b];
            newArr.splice(a, 1, result);
        } else if (command == 'decrease') {
            newArr = newArr.map(x => x - 1);
        }
    }
    console.log(newArr.join(', '));
}
