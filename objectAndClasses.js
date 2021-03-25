function personInfo(firstName, secondName, age) {
    let obj = {
        firstName,
        secondName,
        age
    };
    console.log(obj);
}

function city(obj) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key} -> ${element}`);
        }
    }
}

function convertToObj(str) {
    let obj = JSON.parse(str);
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key}: ${element}`);
        }
    }
}

function toJson(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };
    let str = JSON.stringify(obj)
    console.log(str);
}

function cat(arr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name;
            this.age;

        }
    }
    for (let i = 0; i < arr.length; i++) {
        let cat = arr[i].split(' ');
        let name = cat[0];
        let age = cat[1];
        cats.push(new Cat(name, age));
    }

}


cat(['Mellow 2', 'Tom 5'])