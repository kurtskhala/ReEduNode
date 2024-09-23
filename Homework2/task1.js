// 1) Create a function that counts the Number of Digits in Each Element, e.g: [123, 45, 6] becomes [3, 2, 1]).

function CountNumOfDigits(arr) {
    const countedArr = [];

    for(let i=0; i<arr.length; i++) {
        countedArr.push(arr[i].toString().length);                
    }

    return countedArr;
}

console.log(CountNumOfDigits([123, 45, 6]));
