function reception(arr) {
    let hours = 0;
    let efficiency = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let studentsCountt = Number(arr[3]);
    while (studentsCountt >= 0) {
        studentsCountt -= efficiency;
        hours++;
        if (hours % 4 == 0) {
            studentsCountt += efficiency;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

reception(['5', '6', '4', '20'])