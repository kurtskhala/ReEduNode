//  Given a string, you have to return a string in which each character 
// (case-sensitive) is repeated once. e.g: "String"      -> "SSttrriinngg"
// e.g: "Hello World" -> "HHeelllloo  WWoorrlldd"

function doubleChar(str) {
  let doubled = "";
  for (let i = 0; i < str.length; i++) {
    doubled = doubled + str[i] + str[i];
  }
  return doubled;
}
