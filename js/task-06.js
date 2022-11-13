const refInput = document.querySelector("#validation-input");

// refsInput.addEventListener("focus", function());
// refsInput.addEventListener("blur", function());
const inputLength = Number(refInput.dataset.length);

console.log(inputLength);

refInput.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length !== inputLength) {
    refInput.classList.remove(`valid`);
    refInput.classList.add(`invalid`);
  } else refInput.classList.remove(`invalid`);
  refInput.classList.add(`valid`);
});
