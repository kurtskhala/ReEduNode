// 4) write a function that try to get data from this two sources:  https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users and return the only response which has faster response, use fetch or axios method.

const fetch1 = fetch("https://dummyjson.com/users");
const fetch2 = fetch("https://jsonplaceholder.typicode.com/users");

Promise.race([fetch1, fetch2])
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
