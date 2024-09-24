// 6) Get the total number of characters by eye color (hint. a map of eye color to count)
// e.g: {
// brown: 1,
// yellow: 1,
// blue: 2
// }

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

function countEyeColor(arr) {
    return arr.reduce((acc, char) => {
        if(acc[char.eye_color]) {
            acc[char.eye_color] ++;
        } else {
            acc[char.eye_color] = 1;
        }

        return acc;
    },{})
}

function countEyeColor2(arr) {
    const newArr = [];
    arr.map((element) => {
        if(newArr[element.eye_color]) {
            newArr[element.eye_color] ++;
        } else {
            newArr[element.eye_color] = 1;
        }
    })
    return newArr;
}

console.log(countEyeColor(characters));
console.log(countEyeColor2(characters));
