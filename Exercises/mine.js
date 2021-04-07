function mine(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let num = Number(arr[i + 1]);
        if (obj.hasOwnProperty(name)) {
            obj[name] += num;
        } else {
            obj[name] = num;
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
mine([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])