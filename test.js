// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
    let hole = w * h;
    let Fbrick = a * b;
    let Sbrick = b * c;
    let Tbrrick = a * c;
    if (Fbrick == hole || Sbrick == hole || Tbrrick == hole) {
        return true;
    } else {
        return false;
    }
}

console.log(doesBrickFit(1, 2, 2, 1, 1)) // doesBrickFit(1, 1, 1, 1, 1); // ➞ true

doesBrickFit(1, 2, 1, 1, 1); // ➞ true

doesBrickFit(1, 2, 2, 1, 1); // ➞ false