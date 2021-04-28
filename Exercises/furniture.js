function furniture(arr) {

    let furniture = [];
    let price = 0;
    for (const line of arr) {
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<num>\d+)/g;
        let found = regex.exec(line);
        if (found !== null) {
            furniture.push(found.groups.name);
            price += Number(found.groups.price) * Number(found.groups.num)
        }
    }
    console.log(`Bought furniture:`);
    for (const element of furniture) {
        console.log(element);
    }
    console.log(`Total money spend: ${price.toFixed(2)}`);

}

furniture([">>Sofa<<312.23!3",
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])