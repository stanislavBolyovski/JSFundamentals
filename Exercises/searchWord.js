function search(str, word) {
    let arr = str.split(' ');
    let count = 0;
    for (const element of arr) {
        if (element == word) {
            count++;
        }
    }
    console.log(count);
}

search("This is a word and it also is a sentence",
    "is"
);