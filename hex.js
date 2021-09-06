// hex array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Set up a hex color code
  //then set up a loop that will generate a hex color, loops 6 times
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    // After every iteration
    // anytime we click the button this loops getting a randomNumber of a value from our array and creates a hex color of 6 digits
    console.log(hexColor);
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// This function returns a random number.
// a Math.random() function returns a unique number between 0 - 1, but its never going to be 1, so 0.999999999999999999999999999999999999 or something like that
// We multiply it with the length of the colors array.
// Then we round down to the closest integer using Math.floor - rounds down.
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
