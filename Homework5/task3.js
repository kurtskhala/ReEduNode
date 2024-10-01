// 3)write a sleep function. make a function that takes a ms as an
// argument and when you call this function waits untill this function resolved.
// use setTimeout and promises.
// eg: console.log('first')
// await sleep(2000)
// console.log('second')
// second should sleep after 2 seconds

function sleep(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (true) {
        res("resolved");
      } else {
        rej("error!");
      }
    }, ms);
  });
}

async function printAfterSleep2() {
  console.log("first");

  try {
    await sleep(5000);
    console.log("second");
  } catch (error) {
    console.log(error);
  }
}

function printAfterSleep() {
  console.log("first");
  sleep(5000)
    .then(() => {
      console.log("second");
    })
    .catch((e) => {
      console.log(e);
    });
}

printAfterSleep2();
