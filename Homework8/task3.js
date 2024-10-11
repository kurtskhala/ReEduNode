// 3) Validate a GE phone number in the format 598-12-34-56
function validatePhoneNumber(str) {
    return /^[5]\d{2}\-\d{2}\-\d{2}\-\d{2}/.test(str);
}

console.log(validatePhoneNumber("598-12-34-56"));
