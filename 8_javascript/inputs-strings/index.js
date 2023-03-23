let form = document.querySelector('[data-js="form"]');
let output = document.querySelector('[data-js="output"]');
let inputName = document.querySelector('[data-js="name"]');
let inputColor = document.querySelector('[data-js="color"]');
let inputHours = document.querySelector('[data-js="hours-number"]');
let button = document.querySelector('[data-js="button"]');

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt);
  name = inputName.value;
  color = inputColor.value;
  hours = inputHours.value;
  output.innerHTML = "hey";
});
