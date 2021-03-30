function adressBook(input) {
    let day, name;
    let obj = {};
    for (const line of input) {
        [day, name] = line.split(' ');
        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            obj[day] = name;
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

adressBook(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])