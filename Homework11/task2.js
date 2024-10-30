// 2) Run the command node main.js Ferrari 2020 red,
// retrieve the data from process.argv, and build a car object with the properties
// id, carModel, carColor, and carReleaseDate. Append this object to cars.json.
// Each time you run this command, a new object should be added to cars.json,
// so if you run it five times, you should have five objects in the file.

const fs = require("fs").promises;
const [, , carModel, carReleaseDate, carColor] = process.argv;

async function writeDataIntoCars() {
  try {
    let data;
    try {
      data = await fs.readFile("cars.json", "utf-8");
    } catch (e) {
      if (readError.code === "ENOENT") {
        data = "[]";
      } else {
        throw readError;
      }
    }
    const cars = data.trim() ? JSON.parse(data) : [];

    const lastCarId = cars[cars.length - 1]?.id || 0;
    const newCar = {
      id: lastCarId + 1,
      carModel,
      carReleaseDate,
      carColor,
    };
    cars.push(newCar);
    await fs.writeFile("cars.json", JSON.stringify(cars));
  } catch (e) {
    console.log("Error:", e);
  }
}

writeDataIntoCars();
