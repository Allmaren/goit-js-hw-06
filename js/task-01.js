// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);

// const categoryTitleRef = document.querySelectorAll("h2");
// categoryTitleRef.forEach((element) => {
//   console.log(`Category: `, element.textContent);
// });

itemEl.forEach((element) => {
  console.log(`Category: `, element.firstElementChild.textContent);
  console.log(`Category: `, element.lastElementChild.children.length);
});
