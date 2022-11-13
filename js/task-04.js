let counterValue = {
  value: 0,
  increment() {
    console.log("increment ->this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

// const updateCounter = function (value, operation) {
//   operation(value);
// };
const refs = {
  counterRef: document.querySelector("#value"),
  buttonIncrementRef: document.querySelector('button[data-action="increment"]'),
  buttonDecrementRef: document.querySelector('button[data-action="decrement"]'),
};

// console.log(refs.counterRef);
// console.log(refs.buttonIncrementRef);
// console.log(refs.buttonDecrementRef);

refs.buttonIncrementRef.addEventListener("click", function () {
  //   console.log("click+");
  counterValue.increment();
  //   console.log(counterValue);
  refs.counterRef.textContent = counterValue.value;
});

refs.buttonDecrementRef.addEventListener("click", function () {
  //   console.log("click-");
  counterValue.decrement();
  //   console.log(counterValue);
  refs.counterRef.textContent = counterValue.value;
});
