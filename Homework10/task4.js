// 4) write a function that takes number as a parameter 
// and check is this number wide or not. 
// * wide means that If the number of its digits is 
// greater than the sum of the digits.

function isNumberWide(n) {
    let nToString = n.toString();
    let sum =0;
    for(let i=0; i< nToString.length; i++) {
        sum+=parseInt(nToString[i])
    }

    return sum < nToString.length;
}

console.log(isNumberWide(11091));
