// 5) create a three promise that returns any kind of arrays with difference time.
//  one of one of them should be reject other two should be fulfilled. merged the only fulfilled arrays.

const myPromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res([12, 23, 54]);
  }, 2000);
});

const myPromise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res([88, 11, 22]);
  }, 1000);
});

const myPromise3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Rejected");
  }, 3000);
});

Promise.allSettled([myPromise1, myPromise2, myPromise3]).then((responses) => {
  const data = responses
    .filter((response) => response.status === "fulfilled")
    .reduce((acc, curr) => [...acc, ...curr.value], []);
  console.log(data);
});
