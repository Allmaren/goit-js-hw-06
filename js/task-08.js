const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", fieldsCheck);

function fieldsCheck(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("Заповнені не всі поля! Доповніть, інформацію, будь-ласка");
    return;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset();

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(name, ":", value);
  //   });
}
