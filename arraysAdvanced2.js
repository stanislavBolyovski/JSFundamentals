function train(arr) {
    let wagons = arr.shift();
    let newArr = wagons.split(' ');
    let capacity = Number(arr.shift());


    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] == 'Add') {
            newArr.push(command[1]);
        } else {

            for (let j = 0; j < newArr.length; j++) {
                let sum = 0;
                sum = Number(newArr[j]) + Number(command[0]);
                if (sum <= capacity) {
                    newArr[j] = sum;
                    break;
                }
            }
        }
    }
    console.log(newArr.join(' '));
}

function distinctArray(arr) {

    let newArr = [];
    for (const elements of arr) {
        if (!newArr.includes(elements)) {
            newArr.push(elements)
        }
    }

    console.log(newArr.join(' '));

}

function party(arr) {
    let going = [];
    let there = false;
    for (const guests of arr) {
        there = false;
        let guest = guests.split(' ')

        if (guest[2] == 'going!') {
            for (let j = 0; j < going.length; j++) {
                if (going[j] == guest[0]) {
                    console.log(`${guest[0]} is already in the list!`);
                    there = true;
                }

            }
            if (!there) {
                going.push(guest[0])
            }

        } else {
            if (going.includes(guest[0])) {
                let index = going.indexOf(guest[0]);
                going.splice(index, 1)
            } else {
                console.log(`${guest} is not in the list!`);
            }
        }
    }

    console.log(going.join('\n'));
}

function sort(arr) {

    let sorted = arr.sort(function(a, b) { return a - b });
    let newArr = [];

    while (sorted.length !== 0) {
        let first = sorted.shift();
        let last = sorted.pop();
        newArr.push(last);
        newArr.push(first);


    }

    console.log(newArr.join(' '));


}

function sortByTwo(arr) {


    let firstSort = arr.sort();

    let secondSort = firstSort.sort(function(a, b) {
        a = a.length;
        b = b.length;

        return a - b
    });
    console.log(secondSort.join('\n'));

}

function bomb(arr, bomb) {
    //pravim nov prazen masiv
    //namirame indexa bobata
    let bobmNumber = bomb[0];
    let bombCount = bomb[1];
    let index = arr.indexOf(bobmNumber);
    while (arr.includes(bobmNumber)) {
        let removedAfter = arr.splice(index, -bomb[1]);
        index = arr.indexOf(bobmNumber);
    }

    console.log(arr);
}


function search(arr, second) {
    let newArrLength = second[0];
    let deleteCount = second[1];
    let searchedNumber = second[2];
    let count = 0;

    let newArr = arr.splice(0, newArrLength);
    newArr = newArr.splice(deleteCount);

    for (const element of newArr) {
        if (element == searchedNumber) {
            count++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}


function gladiator(arr) {
    let inventory = arr[0].split(' ');
    arr.splice(0, 1);
    let command;

    for (let i = 0; i < arr.length; i++) {
        command = arr[i];
        command = command.split(' ');

        switch (command[0]) {
            case 'Buy':
                inventory.push(command[1]);
                break;
            case 'Trash':
                if (inventory.includes(command[1])) {
                    let deleteItem = inventory.indexOf(command[1]);
                    inventory.splice(deleteItem, 1)
                }

                break;
            case 'Repair':

                if (inventory.includes(command[1])) {
                    let move = inventory.indexOf(command[1]);
                    let moved = inventory.splice(move, 1);
                    inventory.push(moved[0]);
                }

                break;
            case 'Upgrade':

                let itemU = command[1];
                itemU = itemU.split('-');
                if (inventory.includes(itemU[0])) {

                    let upgradeIndex = inventory.indexOf(itemU[0]);
                    let upgradedItem = itemU[0] + ':' + itemU[1]
                    inventory.splice(upgradeIndex, 1, upgradedItem);
                    inventory.unshift(itemU[0]);

                }
                break;
            default:
                break;
        }
    }
    console.log(inventory.join(' '));
}