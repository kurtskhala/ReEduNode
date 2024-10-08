// 4) დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს,
//  გამოიყენეთ დიბაუნს ტექნიკა

const body = document.querySelector(".body");

const debounce4 = (callback, waitTime) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, waitTime);
  };
};

function logMouse(event) {
  let x = event.clientX;
  let y = event.clientY;
  console.log(x, y);
}

body.addEventListener("mousemove", debounce4(logMouse, 300));
