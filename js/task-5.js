function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector(".color");
const button = document.querySelector(".change-color");
const handleClick = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
};

button.addEventListener("click", handleClick);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const button = document.querySelector(".change-color");
// button.addEventListener("click", (event) => {
//   document.body.style.background = getRandomHexColor();
// });
