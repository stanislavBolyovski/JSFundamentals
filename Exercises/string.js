function string(searched, str) {
    str = str.toLowerCase().split(' ');
    let find = false;
    for (const word of str) {
        if (word == searched) {
            console.log(word);
            find = true;
        }
    }
    if (find == false) {
        console.log(`${searched} not found!`);
    }

}

string('python',
    'JavaScript is the best programming language'

);