// 1) Check if any number in the array is divisible by 5 and if true, find its index e.g: [3, 6, 10, 12] → 2

function indexOfNumDevByFive(arr) {
  return arr.findIndex((number) => number % 5 === 0);
}

function indexOfNumDevByFive2(arr) {
  const indexes = [];
  arr.forEach((number, index) => {
    number % 5 === 0 && indexes.push(index);
  });
  return indexes;
}

console.log(indexOfNumDevByFive([3, 6, 10, 12, 15]));
console.log(indexOfNumDevByFive2([3, 6, 10, 12, 15]));
