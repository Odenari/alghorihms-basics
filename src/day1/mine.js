const arr = [1, 100, 1000, 23, 4, 5, 65, 66];

function binary_search(array, findMe) {
    let from = 0;
    let to = array.length; // to not within the range
    array.sort((a, b) => a - b);
    do {
        const middle = Math.floor(from + (to - from) / 2);
        console.log("Middle index is -> ", middle);
        const value = array[middle];
        if (findMe === value) {
            console.log("The index of value -> ", array.indexOf(value));
            console.log("The value -> ", value);
            return true;
        }
        if (value > findMe) {
            to = middle;
        }

        if (value < findMe) {
            from = middle + 1;
        }
    } while (from < to);
    console.log("There is no such value!", -1);
    return -1;
}

const t1 = binary_search(arr, 0);
