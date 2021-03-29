function computerStor(arr) {
    let sum = 0;
    let taxes;
    let discount = 1;
    let typeOfClient = arr.splice(-1);
    for (const price of arr) {

        if (price <= 0) {
            console.log('Invalid price!');
        } else {
            sum += Number(price);
        }

    }
    if (typeOfClient[0] == 'special' && sum != 0) {
        taxes = sum * 0.2;
        discount = (sum + taxes) * 0.1;
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2) }$`);
        console.log(`-----------`);
        console.log(`Total price: ${(sum + taxes - discount).toFixed(2)}$`);
    } else if (typeOfClient[0] == 'regular' && sum != 0) {
        taxes = sum * 0.2;
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2) }$`);
        console.log(`-----------`);
        console.log(`Total price: ${(sum + taxes).toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}

computerStor([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])