function phone(input) {
    let obj = {};
    let name;
    let number;
    for (const line of input) {
        [name,
            number
        ] = line.split(' ');
        obj[name] = number;
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

phone(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])