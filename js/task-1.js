const numberCategories = document.querySelectorAll(
  "#categories li.item"
).length;
console.log(`Number of categories: ${numberCategories}`);
const array1 = [...document.querySelectorAll("li.item h2")].map(
  (el) => el.textContent
);
const array2 = document.querySelectorAll("li.item ul");

let i = 0;
while (i < numberCategories) {
  console.log(`Category: ${array1[i]}`);
  console.log(`Elements: ${array2[i].numberChildElement}`);
  i++;
}
