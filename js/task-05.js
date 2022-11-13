const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

// refs.input.addEventListener("input", function () {
//   counterValue.increment();
//   refs.output.textContent = counterValue.value;
// });

function onInputFocus() {
  console.log("інпут в фокусі");
}
function inInputBlur() {
  console.log(`інпут без фокуса`);
}

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", inInputBlur);

refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   refs.output.textContent = event.currentTarget.value;

// }

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;

  if (!refs.output.textContent) {
    return (refs.output.textContent = "Anonymous");
  }
}
