// 1) make a promise that rejects or resolves 50/50

const myPromise = new Promise((res, rej) => {
  let rand = Math.random();
  if (rand > 0.5) {
    res("Resolved");
  } else {
    rej("Rejected");
  }
});

myPromise.then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
})