const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const foundIngredients = document.querySelector("#ingredients");

const makeIngredientsList = (values) => {
  return values.map((value) => {
    const listRes = document.createElement("li");
    listRes.classList.add("item");
    listRes.textContent = value;
    return listRes;
  });
};
// `<li>${ingredient}</li>`).join("");

// const res = ingredients.reduce(
//   (previous, current) => previous + `<li>${current}</li>`,
//   ""
// );

// document.createElement();

const listEl = makeIngredientsList(ingredients);
console.log(listEl);
foundIngredients.append(...listEl);
