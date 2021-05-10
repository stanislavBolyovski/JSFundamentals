function secret(arr) {
    let word = arr.shift();
    for (let line of arr) {
        line = line.split(':|:');
        let command = line[0];

        if (command == "ChangeAll") {
            while (word.includes(line[1])) {
                word = word.replace(line[1], line[2]);
            }
            console.log(word);
        } else if (command == "Reverse") {
            if (word.includes(line[1])) {
                let newStr = line[1].split('').reverse().join('')
                word = word.replace(line[1], newStr);
                console.log(word);

            } else {
                console.log('error');
            }
        } else if (command == "InsertSpace") {
            let index = line[1];
            word = word.split('');
            word.splice(index, 0, ' ');
            word = word.join("");
            console.log(word);
        }
    }
    console.log(`You have a new text message: ${word}`);
}
secret([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);