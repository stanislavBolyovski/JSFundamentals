function telNum(str) {
    let regex = /\+359([ -])\d\1\d{3}\1\d{4}\b/g;
    let result = [];
    while ((found = regex.exec(str)) !== null) {
        result.push(found[0]);
    }
    console.log(result.join(', '));
}

telNum("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222");