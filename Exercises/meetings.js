function meetings(input) {
    let name, adress;
    let obj = {};
    for (const line of input) {
        [name, adress] = line.split(":")
        obj[name] = adress;
    }

    let sorted = Object.entries(obj);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const element of sorted) {
        console.log(`${element.join(' -> ')}`);
    }
}
meetings(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])