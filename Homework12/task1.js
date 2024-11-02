// 1) Create a function that checks if a received folder name exists in the root directory.

const fs = require("fs");
const path = require("path");

function folderExists(folderName) {
  const rootDir = path.resolve("./");
  const folderPath = path.join(rootDir, folderName);
  return fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory();
}

if (folderExists("testFlder")) {
  console.log("exists");
} else {
  console.log("does not exist");
}
