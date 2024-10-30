// 3) Write a random text into a file named text.txt. Then, read this file and count how many vowels are present.

const fs = require("fs").promises;

async function countVowelsFromFile() {
  try {
    const data = await fs.readFile("text.txt", "utf-8");
    const text = JSON.stringify(data);
    let countOfVowels = 0;
    for(let i=0; i< text.length; i++) {
       if(/^[aeiou]$/.test(text[i].toLowerCase())) {
        countOfVowels++;
       }
    }
    console.log(countOfVowels);
  } catch (e) {
    console.log("Error:", e);
  }
}

countVowelsFromFile();

