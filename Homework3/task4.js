// 4) Flatten a nested array and find the sum of all elements e.g: [[2, 4], [6, 8]] → 20

function flatArraySum(arr) {
    return arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
}

console.log(flatArraySum([[2, 4], [6, 8]]));
