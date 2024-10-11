// 4) Validate the emails that ends with @example.com 

function validateEmail(str) {
    return /.*.\@example.com$/.test(str)
}

console.log(validateEmail("sdf@example.com"));
