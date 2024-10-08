// 1) შექმენით ინფუთი რომლის სერჩის დროს რექუესთს გააგზავნით შემდეგ აიპიაიზე:
// https://api.escuelajs.co/api/v1/products?title=wooden როგორც ხედავთ თაითლი არის ქუერი პარამეტრი,
// დებაუნს ტექნიკით გააკეთეთ ინფუთი რომლის ჩაწერაზეც, დარექუსთდება სწორედ title პარამეტრით.

const task1Input = document.querySelector(".task1Input");

async function getData() {
  try {
    const searchValue = task1Input.innerHTML;
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?title=${searchValue}`
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

const debounce = (callback, waitTime) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, waitTime);
  };
};

task1Input.addEventListener("input", debounce(getData, 300));
