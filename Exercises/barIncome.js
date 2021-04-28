function income(arr) {
    let total = 0;
    for (const line of arr) {
        let regex = /%(?<name>[A-Z][a-z]+)%<(?<product>\w+)>\|(?<num>[0-9])\|(?<price>[0-9]+(.[0-9]+))?\$/g;
        let found = regex.exec(line);
        if (found !== null) {
            let price = Number(found.groups.num) * Number(found.groups.price);
            total += price;

            console.log(`${found.groups.name}: ${found.groups.product} - ${price.toFixed(2)}`);
        }

    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
income(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);