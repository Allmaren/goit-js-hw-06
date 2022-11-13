const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector(`#text`);

console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener("input", () => {
  spanEl.style.fontSize = inputEl.value + "px";
});
