const mainElement = document.querySelector(".main");
console.log("mainele:", mainElement);
// console.dir(mainElement) - shows all methods available to manipulate in a html
//selecting by attribute
document.querySelector('[data-js="main"]');

// Adding a class to the html

const logButton = document.querySelector('[data-js="console-log"]');
console.log(logButton); // always log to see if selected

logButton.addEventListener("click", function () {
  console.log("Hello from the other world!");
});

const darkButton = document.querySelector('[data-js="add-dark"]');
console.log(darkButton);
darkButton.addEventListener("click", (event) => {
  mainElement.classList.add("dark");
});

const lightButton = document.querySelector('[data-js="add-light"]');
console.log(lightButton);
lightButton.addEventListener("click", (event) => {
  mainElement.classList.remove("dark");
});

const toggleButton = document.querySelector('[data-js="toggle-dark"]');
console.log(toggleButton);
toggleButton.addEventListener("click", (event) => {
  mainElement.classList.toggle("dark");
});
