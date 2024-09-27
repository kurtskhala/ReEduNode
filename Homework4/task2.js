// 2)  Write a function that takes an object and a key as input and deletes the specified key from the object.

const obj = {
    sa: "nika",
    age: 12
}

function deleteKey(obj, key) {
    if(Object.keys(obj).includes(key)) {
        delete obj[key];
        return obj;
    } else {
        return "The object does not contains that key";
    }
}

console.log(deleteKey(obj, "name"));
