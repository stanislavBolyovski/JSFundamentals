function lift(arr) {
    let people = arr[0];
    let lift = arr[1].split(' ');
    let capacity = 4;
    let result = [];

    for (const wagon of lift) {
        let wagonn = Number(wagon);
        while (people > 0) {
            if (wagonn < 4) {
                wagonn++;
                people--;

            } else {
                result.push(wagonn)
                break;
            }
        }
        if (people == 0) {

            result.push(wagonn)
        }
    }
    if (people == 0) {
        console.log('The lift has empty spots!');
        console.log(result.join(' '))
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(result.join(' '));
    }
}

lift([
    "20",
    "0 2 0"
])