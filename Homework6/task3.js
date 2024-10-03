// 3) write a function that try to get data from: https://jsonplaceholde.typicode.com (link is invalid for this task) if request will failed try to retrieve it 5 times 


function fetchData() {
    fetch("https://jsonplaceholde.typicode.com")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
}

fetchData();