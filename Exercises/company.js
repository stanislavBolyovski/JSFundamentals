function company(arr) {
    let parts;
    let obj = {};
    let [company, id] = arr
        .shift()
        .split(' -> ');
    obj[company] = [];
    //filling obj
    while (arr.length >= 0) {
        if (obj.hasOwnProperty(company)) {
            obj[company].push(id);
        } else {
            obj[company] = [];
            obj[company].push(id);
        }
        if (arr.length == 0) {
            break;
        } else {
            parts = arr.shift().split(' -> ');
            company = parts[0];
            id = parts[1];
        }
    }




    let array = [];
    for (const key in obj) {
        array.push(key)
    }
    //sorting
    array.sort((a, b) => a.localeCompare(b));

    //log
    for (const key of array) {
        let result = '';
        console.log(key);
        for (const ids of obj[key]) {
            console.log(`-- ${ids}`);
        }

    }
}

company([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);