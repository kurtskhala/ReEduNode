// 5) Save the random horoscop data like 10 into localstorage and when user enter the website,
// display different horoscop to difference day.
// like  first day first horoscop, second day second horoscop and etc.

const header = document.querySelector(".horoscop");

const horoscopes = [
  "The higher your hopes, the farther you can fall if they don't happen. Be realistic.",
  "Your creativity could use a nice workout -- the kitchen is the perfect place for it.",
  "You can make yourself start feeling good -- as soon as you start thinking good!",
  "Don't show that you have doubt in what you are doing today -- even if you do!",
  "Be open-minded and watch for signs today -- they won't look like how you expect.",
  "Listen to others reminisce about the past. You will gain some incredible insight.",
  "You will have a lot of compassionate energy today. Use it on a needy friend.",
  "New beginnings are important, but don't lose your appreciation for old connections.",
  "If you feel like you're missing out on a joke, don't let it weaken your confidence.",
  "Your social life is going to get a lot hotter a lot sooner than you anticipated!",
];

if (!localStorage.getItem("horoscopes")) {
  localStorage.setItem("horoscopes", JSON.stringify(horoscopes));
}

const today = new Date();

if (!localStorage.getItem("firstVisitDate")) {
  localStorage.setItem("firstVisitDate", today.toDateString());
}

const firstVisitDate = new Date(localStorage.getItem("firstVisitDate"));
const whichHoroscopeToDisplay =
  Math.floor((today - firstVisitDate) / (1000 * 60 * 60 * 24)) %
  horoscopes.length;
const horoscop = JSON.parse(localStorage.getItem("horoscopes"))[whichHoroscopeToDisplay];

header.innerHTML =horoscop;