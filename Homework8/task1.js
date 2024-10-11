// 1) Check if a string starts with an uppercase letter.

function startsWithUpperCase(str) {
    return /^[A-Z]/.test( str );
}

console.log(startsWithUpperCase("sfdf"));
