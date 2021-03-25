function employees(arr) {
    let obj = {};
    arr.forEach(element => {
        obj[element] = element.length;
    });
    for (const key in obj) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

function towns(arr) {
    let obj = {};
    for (const elements of arr) {
        let town = 'town',
            lat = 'latitude',
            long = 'longitude';
        let element = elements.split(' | ');
        obj[town] = element[0];
        obj[lat] = Number(element[1]).toFixed(2);
        obj[long] = Number(element[2]).toFixed(2);
        console.log(obj);
    }
}

function store(stored, ordered) {
    let obj = {};
    for (let i = 0; i < stored.length; i += 2) {
        const element = stored[i];
        obj[element] = Number(stored[i + 1]);
    }
    for (let i = 0; i < ordered.length; i += 2) {
        const element = ordered[i];
        if (!obj.hasOwnProperty(element)) {
            obj[element] = Number(ordered[i + 1]);
        } else {
            obj[element] += Number(ordered[i + 1]);
        }
    }

    for (const key in obj) {
        const element = obj[key];
        console.log(`${key} -> ${element}`);

    }

}

function movies(arr) {

    let arrMovies = [];
    for (const element of arr) {

        if (element.includes('addMovie')) {
            let obj = {};
            let line = element.split("addMovie ");
            obj.name = line[1];
            arrMovies.push(obj);
        } else if (element.includes('directedBy ')) {
            let line = element.split(" directedBy ");
            let movie = line[0];
            let director = line[1];
            let myMovie = arrMovies.find(x => x.name == movie);
            if (myMovie) {
                myMovie.director = director;
            }
        } else {
            let line = element.split(" onDate ");
            let movie = line[0];
            let date = line[1];
            let myMovie = arrMovies.find(x => x.name == movie);
            if (myMovie) {
                myMovie.date = date;
            }
        }
    }
    for (const element of arrMovies) {
        if (element.name != null && element.director != null && element.date != null) {
            console.log(JSON.stringify(element));
        }
    }
}

function inventory(arr) {
    let levels = [];
    let heroes = [];
    for (const line of arr) {
        let obj = {};
        //let current = line.split(' / ');
        //obj.name = current[0];
        //let level = obj.level = current[1];
        //let items = current[2].split(' ,')
        let [name, level, items] = line.split(' / ');
        items = items.split(', ').sort().join(', ');
        obj.name = name;
        obj.level = level;
        obj.items = items;
        levels.push(level);
        heroes.push(obj)

    }
    levels.sort();
    for (const current of levels) {
        let currentHeroe = heroes.find(x => x.level == current);
        console.log(`Hero: ${currentHeroe.name}`);
        console.log(`level => ${currentHeroe.level}`);
        console.log(`items => ${currentHeroe.items}`);
    }
}


function dictionary(str) {
    let obj = {};
    for (const line of str) {
        // JSON.parse(line);
        linee = line.split(":");
        JSON.parse(linee);
        console.log(linee);

    }

}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);