function repeat(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
            arr.push(str[i]);
        }
    }
    console.log(arr.join(''));
}
repeat('aaaaabbbbbcdddeeeedssaa');