// Write a function that cleans whole sentences to numbers.
// eg: 'This looks5 grea8t!' -> 'This looks great!'

function replaceNum(str) {
  return str.replace(/[0-9]/g, "");
}
