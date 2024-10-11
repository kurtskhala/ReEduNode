// 6) Make a form with three inputs name, email and phone number,
// when user try to enter each of this field you should save this info into localstorage.
// if you typing info and refresh the page, the info that you wrote should not be deleted.

const inputs = document.querySelectorAll(".input");
let inputValues;
if (!localStorage.getItem("inputValues")) {
  inputValues = ["","",""];
} else {
  inputValues = JSON.parse(localStorage.getItem("inputValues"));
}


inputs.forEach((input, i) => {
    input.value = inputValues[i];
  input.addEventListener("input", () => {
    inputValues[i] = input.value;
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
  });
});
