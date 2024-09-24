// 3) Write a function that returns the sum of the squares of all the numbers in an array (e.g., [1, 2, 3] returns 1^2 + 2^2 + 3^2 = 14). Use a loop to calculate the squares.

function sumOfSquares(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum+=(arr[i]**2);                
    }

    return sum;
}

console.log(sumOfSquares([1, 2, 3]));