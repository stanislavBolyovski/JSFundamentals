function dates(str) {
    let regex = /\b(?<day>\d{2})([-\/\.])(?<month>[A-Z][a-z]+)\2(?<year>\d{4})\b/g;
    while ((found = regex.exec(str)) !== null) {
        let days = found.groups['day'];
        let months = found.groups['month'];
        let years = found.groups['year'];
        console.log(`Day: ${days}, Month: ${months}, Year: ${years}`);
    }
}

dates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");