// 7) Create a two button En Ka and the random text below, if you choose,
// en the random text should be translated into english,
// when you click ka it should be translated into georgian language.
// use localstorage to save this info.

const kaBtn = document.querySelector(".kaBtn");
const enBtn = document.querySelector(".enBtn");

const text = document.querySelector(".text");

const translations = {
  ka: "გამარჯობა",
  en: "Hello",
};

kaBtn.addEventListener("click", () => {
    localStorage.setItem("selLang","ka")    
    text.innerHTML = translations["ka"]
})

enBtn.addEventListener("click", () => {
    localStorage.setItem("selLang","en")
    text.innerHTML = translations["en"]
})

if(localStorage.getItem("selLang")) {
    text.innerHTML = translations[localStorage.getItem("selLang")];
} else {
    localStorage.setItem("selLang","en")
    text.innerHTML = translations["en"]
}
