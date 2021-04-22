function match(str) {
    let result = [];
    let regex = /\b[A-Z][a-z]+[ ]+[A-Z][a-z]+\b/g;
    let found;
    while ((found = regex.exec(str)) !== null) {
        result.push(found[0]);

    }
    console.log(result.join(' '));
}

match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");