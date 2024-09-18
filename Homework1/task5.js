// Make a function that takes a number as a argument and return rendom
// word which length would be the number. e.g: 4 => 'h1zt',
// 5 => 'zvc1e'. you should build random string from all characters and numbers.

function createRandWord(num) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randWord = "";
  for (let i = 0; i < num; i++) {
    randWord += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randWord;
}
