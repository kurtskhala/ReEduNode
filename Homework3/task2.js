// 2) Filter out negative numbers from a nested array e.g: [[1, -2], [3, -4], [5]] → [1, 3, 5]

function filterNegativeNumb(arr) {
    return arr.flat(Infinity).filter((num) => num > 0);
}

console.log(filterNegativeNumb([[1, -2], [3, -4], [5]]));
