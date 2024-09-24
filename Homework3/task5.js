// 5) Flatten a nested array, then square each number, and calculate sum the squares

function flatArraySum(arr) {
    return arr.flat(Infinity).reduce((acc, curr) => acc + curr**2,0);
}

console.log(flatArraySum([[2, 4], [6, 8]]));

