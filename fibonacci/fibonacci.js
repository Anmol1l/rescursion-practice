function fibs(n) {
    let first = 0;
    let second = 1;
    let next;
    let arr = [];
    if (n === 1) arr.push(0);
    else if (n === 2) arr.push(0, 1);
    else if (n > 2) {
        arr.push(0, 1);
        for (let i = 0; i < n - 2; i++) {
            next = first + second;
            arr.push(next);
            first = second;
            second = next;
        }
    }
    return arr
}

console.log(fibs(8))

function fibsRec(n) {
    let arr = [];
    if (n === 1) {
        arr.push(1);
        return arr;
    } else if (n === 2) {
        arr.push(0, 1);
        return arr;
    } else if (n > 2) {
        arr = fibsRec(n - 1);
        let first = arr.at(-2);
        let second = arr.at(-1);
        let sum = first + second;
        arr.push(sum);
        return arr;
    }
}

console.log(fibsRec(8))
