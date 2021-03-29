function game(arr) {
    let resultArr = arr.splice(0, 1);
    resultArr = resultArr[0];
    resultArr = resultArr.split(' ');

    let moves = 0;
    for (const line of arr) {
        if (resultArr.length == 0) {
            break;
        }
        if (line != 'end') {
            let [a, b] = line.split(' ');
            moves++;
            if (a >= 0 && b >= 0) {
                if (resultArr[a] == resultArr[b]) {
                    console.log(`Congrats! You have found matching elements - ${resultArr[a]}!`);
                    resultArr.splice(a, 1);
                    resultArr.splice(b - 1, 1);
                } else {
                    console.log('Try again!');
                }
            } else {
                let middle = resultArr.length / 2;
                resultArr.splice(middle, 0, `-${moves}a`, `-${moves}a`);
                console.log('Invalid input! Adding additional elements to the board');
            }
        } else {
            break;
        }
    }
    if (resultArr.length == 0) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(resultArr.join(' '));
    }

}

game([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])