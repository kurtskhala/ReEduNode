// 1) Fetch data from this API: https://jsonplaceholder.typicode.com/users.
// Parse the data so that each object contains only four properties:
//  id, name, username, and email. Write the resulting array to a file called users.json.

const fs = require("fs").promises;

async function writeDataIntoUsers() {
  try {
    const data = await fetchData();
    await fs.writeFile("users.json", JSON.stringify(data));
  } catch (e) {
    console.log("Error:", e);
  }
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const newData = data.map((element) => ({
      id: element.id,
      name: element.name,
      username: element.username,
      email: element.email,
    }));

    return newData;
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

writeDataIntoUsers();