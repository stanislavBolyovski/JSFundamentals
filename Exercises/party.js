function party(arr) {
    let count = 0;
    let guestList = {
        'VIP': [],
        'regular': []
    }
    let name = arr.shift();
    while (name !== 'PARTY') {
        if (isNaN(name[0])) {
            guestList['regular'].push(name);
        } else {
            guestList['VIP'].push(name);
        }
        name = arr.shift();
    }

    arr.forEach(element => {
        if (guestList['VIP'].includes(element)) {

            let index = guestList['VIP'].indexOf(element);
            guestList['VIP'].splice(index, 1);

        } else if (guestList['regular'].includes(element)) {

            let index = guestList['regular'].indexOf(element);
            guestList['regular'].splice(index, 1);

        }
    });


    console.log(guestList['VIP'].length + guestList['regular'].length);
    for (const guest of guestList['VIP']) {
        console.log(guest);
    }
    for (const guest of guestList['regular']) {
        console.log(guest);
    }




}
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])