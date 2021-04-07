function company(arr) {
    let obj = {};
    for (const line of arr) {
        let [name, company] = line.split(' -> ');
        if (obj.hasOwnProperty(name)) {
            if (obj[name].includes(company)) {
                continue;
            } else {
                obj[name].push(company);
            }
        } else {
            obj[name] = [];
            obj[name].push(company);
        }




    }

    let array = [];
    for (const key in obj) {
        array.push(key)
    }


    array.sort((a, b) => a.localeCompare(b));

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