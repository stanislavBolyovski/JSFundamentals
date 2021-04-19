function file(str) {
    str = str.split('\\');
    let result = str[str.length - 1];
    result = result.split('.');
    console.log(`File name: ${result[0]}`);
    console.log(`File extension: ${result[1]}`);
}

file('C:\\Internal\\training-internal\\Template.pptx');