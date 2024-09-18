// You need to write a function that reverses the words in a given string. 
// Words are always separated by a single space.
// e.g: "Hello World" --> "World Hello"

function reverseSentence(str) {
  let words = str.split(" ");
  let reversed = "";
  for (let i = 0; i < words.length; i++) {
    reversed += ` ${words[words.length - 1 - i]}`;
  }
  return reversed.trim();
}
