function censored(str, word) {
    let result = str.split(word).join(`*`.repeat(word.length));
    console.log(result);
}

censored("A small sentence with some words", "small");