function special(str) {
    str = str.split(' ');
    let speciall = '';
    str.forEach(element => {
        speciall = '';
        if (element[0] == '#') {
            speciall = element.substring(1);
        }
        if (speciall.charCodeAt() >= 65 && speciall.charCodeAt() <= 90 || speciall.charCodeAt() >= 97 && speciall.charCodeAt() <= 122) {
            console.log(speciall);
        }
    });
}

special('Nowadays everyone uses # to tag a #spec2ial word in #socialMedia');