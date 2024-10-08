// 3) write a function that try to get data from: https://jsonplaceholde.typicode.com (link is invalid for this task) if request will failed try to retrieve it 5 times

let count = 0;
const MAX_TRY_OUT = 5;

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholde.typicode.com");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    if (count < MAX_TRY_OUT) {
      console.log("Retrying...");
      setTimeout(() => {
        fetchData();
      }, 2000);
    }
    count++;
  }
}

fetchData();
