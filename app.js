// Colors array.
const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "aqua",
  "black",
  "brown",
  "chartreuse",
  "chocolate",
  "coral",
  "cornsilk",
  "cyan",
  "darkorange",
  "gold",
  "ivory",
  "orangered",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between length of colors array
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  // A random color is set on the Documents Body Background
  // Same Random color & text is set on the text content with the class color.
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// This function returns a random number.
// a Math.random() function returns a unique number between 0 - 1, but its never going to be 1, so 0.999999999999999999999999999999999999 or something like that
// We multiply it with the length of the colors array.
// Then we round down to the closest integer using Math.floor - rounds down.
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
