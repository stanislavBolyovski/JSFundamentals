function wordTracker(arr) {
    let words = arr.shift().split(' ');
    let obj = {};
    for (const elements of words) {
        obj[elements] = 0;
        for (const parts of arr) {
            if (parts == elements) {
                obj[elements]++;
            }
        }
        console.log(`${elements} - ${obj[elements]}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this',
    'sentence',
    'you', 'have', 'to', 'count', 'the',
    'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])