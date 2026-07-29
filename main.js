const changeThemeBtn = document.querySelector("#theme-btn");
const currentTheme = localStorage.getItem("theme") || "";
currentTheme === "dark"
  ? document.body.classList.add("dark-theme")
  : document.body.classList.remove("dark-theme");

changeThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  document.body.classList.contains("dark-theme")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
});

const textAreaElem = document.querySelector("#note-input");
const areaData = localStorage.getItem("draft_text") || "";
if (areaData) {
  textAreaElem.value = areaData;
}
textAreaElem.addEventListener("input", (e) => {
  const text = e.currentTarget.value;
  localStorage.setItem("draft_text", text);
});

const inputELem = document.querySelector("#todo-in");
const addBtnElem = document.querySelector("#add-btn");
const clearBtnElem = document.querySelector("#clear-btn");
const listElem = document.querySelector("#todo-ul");

function markup(arr) {
  return arr
    .map((el) => {
      return `<li>${el}</li>`;
    })
    .join("");
}

let todosData = JSON.parse(localStorage.getItem("todos")) || [];
if (todosData) {
  listElem.innerHTML = "";
  listElem.insertAdjacentHTML("afterbegin", markup(todosData));
}

addBtnElem.addEventListener("click", (e) => {
  const text = inputELem.value.trim();
  if (text.length < 3) {
    return;
  }
  todosData.push(text);
  localStorage.setItem("todos", JSON.stringify(todosData));
  inputELem.value = "";
  listElem.innerHTML = "";
  listElem.insertAdjacentHTML("afterbegin", markup(todosData));
});

clearBtnElem.addEventListener("click", () => {
  localStorage.removeItem("todos");
  todosData = [];
  listElem.innerHTML = "";
});

let visitedCount = localStorage.getItem("visit_count") || 0;
const counterVisitElem = document.querySelector("#counter-text");

document.addEventListener("DOMContentLoaded", () => {
  visitedCount++;
  localStorage.setItem("visit_count", visitedCount);
  counterVisitElem.textContent = `You visited this site: ${visitedCount} times`;
});

const cartDivElems = document.querySelector(".products-list");
const cartCountElem = document.querySelector("#cart-count");
const cartSummaryElem = document.querySelector("#cart-sum");
const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

function getTotalSum(arr) {
  return arr.reduce((acc, el) => (acc += el.price), 0);
}

cartSummaryElem.textContent = getTotalSum(cartProducts);
cartCountElem.textContent = cartProducts.length;

cartDivElems.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const id = e.target.dataset.id;
  const name = e.target.dataset.name;
  const price = Number(e.target.dataset.price);
  const obj = { id, name, price };

  cartProducts.push(obj);
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  cartSummaryElem.textContent = getTotalSum(cartProducts);
  console.log(getTotalSum(cartProducts));

  cartCountElem.textContent = cartProducts.length;
});
