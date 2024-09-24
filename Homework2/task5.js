// 5) Write a function that takes an array of strings and returns the new array with the palindrome words. palindrome words are level, becase if you reverse this word its the same, like madam.  e.g: ['level', 'giga', 'ana', 'button', 'abba'] => ['level', 'ana', 'abba']

function palindromeWords(arr) {
    const palindromes = [];

    for(let i=0; i<arr.length; i++) {
        let tmp = "";
        for(let j=arr[i].length-1; j>=0; j--) {
            tmp += arr[i][j];
        }
        if(arr[i] === tmp) {
            palindromes.push(tmp);                
        }        
    }

    return palindromes;
}

console.log(palindromeWords(['level', 'giga', 'ana', 'button', 'abba']));