function reveal(words, str) {

    words = words.split(', ');
    let arr = str.split(' ');

    for (const element of words) {
        let stars = '';
        stars += "*".repeat(element.length);
        for (const piece of arr) {
            if (piece == stars) {
                arr.splice(arr.indexOf(piece), 1, element);
                break;
            }
        }
    }

    console.log(arr.join(' '));

}

reveal('great, learning',
    'softuni is ***** place for ******** new programming languages'

);