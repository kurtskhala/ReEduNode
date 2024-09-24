// 3) Filter out non-array elements and then check if the remaining elements are arrays 
//    e.g: [1, [2, 3], "hello", [4]] → true for remaining arrays

function filterNonArrayElements(arr) {
    return arr.filter((element) => element.map);
}

function filterNonArrayElementsChecker(arr) {
    const booleans =[]
    arr.forEach((element) => booleans.push(Array.isArray(element)));
    return booleans;
}

console.log(filterNonArrayElementsChecker(filterNonArrayElements([1, [2, 3], "hello", [4]])));
