// 1)  Write a function that takes two or more objects as arguments and merges them into a single object

const obj1 = {
    name: "nika",
    age: 12
}

const obj2 = {
    job: "none",
    exp: 100
}

function mergeTwoObject(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeTwoObject(obj1, obj2));
