function storage(input) {
    let obj = {};
    let product, quantity
    for (const line of input) {
        let [product, quan] = line.split(' ');
        quantity = Number(quan);
        if (obj.hasOwnProperty(product)) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }

    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])