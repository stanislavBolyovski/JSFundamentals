function race(arr) {
    let name = arr.shift().split(' ');

    let obj = {};
    name.forEach(element => {
        obj[element] = 0
    });

    for (const line of arr) {
        let regName = /[A-Za-z]+/g
        let foundName = line.match(regName);
        let name = foundName.join('')

        if (obj.hasOwnProperty(name)) {
            let regNum = /[0-9]/g
            let foundNum = line.match(regNum);
            foundNum = foundNum.map(Number).reduce((a, b) => a + b);
            obj[name] += foundNum
        }
    }

    let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    sorted = sorted.slice(0, 3);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);

}

race(['George Peter Bill Tom',
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
])