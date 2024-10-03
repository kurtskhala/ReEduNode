// 2) write a function that get data from: https://jsonplaceholder.typicode.com/users and return result

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData()