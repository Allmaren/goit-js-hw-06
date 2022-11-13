function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refButton = document.querySelector(".change-color");
const refColor = document.querySelector(".color");
const body = document.body;

refButton.addEventListener("click", () => {
  let res = getRandomHexColor();
  body.style.backgroundColor = res;
  refColor.textContent = res;
});
