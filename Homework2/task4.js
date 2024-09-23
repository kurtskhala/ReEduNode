// 4) Write a function that counts the total number of characters in all the strings in an array. e.g:["a", "ab", "abc"] => 6

function NumberOfChars(arr) {
    let count = 0;

    for(let i=0; i<arr.length; i++) {
        count += arr[i].toString().length;                
    }

    return count;
}

console.log(NumberOfChars(["a", "ab", "abc"]));