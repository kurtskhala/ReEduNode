// 2) write a function that imitates to return fake data, use setTimeout.
// make both async/await and .then.catch methods.

function returnFakeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("resolved");
      } else {
        reject("Error");
      }
    }, 5000);
  });
}



async function getData() {
  try {
    const res = await returnFakeData();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

getData();



returnFakeData()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
