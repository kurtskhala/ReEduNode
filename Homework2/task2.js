// 2) Write a function that takes an array of numbers and reverses the order of its elements using a loop. Don't use reverse(). e.g: [1,2,3] => [3,2,1]

function reverseArray(arr) {
    const reversed = [];

    for(let i=0; i<arr.length; i++) {
        reversed.push(arr[arr.length-i-1]);                
    }

    return reversed;
}

console.log(reverseArray([1,2,3]));