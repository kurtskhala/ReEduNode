// Make a function that takes a sentences and return the abbreaviate of it.
// e.g: Sam Harris => S.H.   e.g: hello world everyone => H.W.E

function createAbbr(str) {
  let words = str.split(" ");
  let abbr = "";
  for (let i = 0; i < words.length; i++) {
    abbr += words[i][0].toUpperCase() + ".";
  }
  return abbr;
}
