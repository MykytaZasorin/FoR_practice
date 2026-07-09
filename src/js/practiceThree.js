const countSpanElem = document.querySelector("#counter-value");
const countBtnElem = document.querySelector("#increment-btn");
let count = 0;

countBtnElem.addEventListener("click", () => {
  count++;
  countSpanElem.textContent = count;
});

const themeToggleBtnElem = document.querySelector("#theme-toggle");
themeToggleBtnElem.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.contains("dark")
    ? (themeToggleBtnElem.textContent = "Увімкнути світлу тему")
    : (themeToggleBtnElem.textContent = "Увімкнути темну тему");
});

const secretTextBtnElem = document.querySelector("#toggle-content-btn");
const secretMessageElem = document.querySelector("#content-text");

secretTextBtnElem.addEventListener("click", () => {
  secretMessageElem.classList.toggle("hidden");
});

const formElem = document.querySelector("#login-form");
formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const errElem = formElem.querySelector("#error-message");
  const inpElem = formElem.querySelector("#username-input");
  const username = inpElem.value.trim();

  if (username.length === 0) {
    errElem.textContent = "Enter your name!";
    return;
  } else {
    errElem.textContent = "";
    formElem.reset();
  }
});

const todosListElem = document.querySelector(".todo-list");
todosListElem.addEventListener("click", (e) => {
  const selectedTodo = e.target.closest("li");
  if (!selectedTodo) return;
  selectedTodo.classList.toggle("completed");
});

const psevdoFormElem = document.querySelector(".todo-control");
const dynamicListElem = document.querySelector("#dynamic-todo-list");

psevdoFormElem.addEventListener("click", (e) => {
  const inpElem = psevdoFormElem.querySelector("#new-todo-input");
  const text = inpElem.value.trim();
  if (e.target.tagName !== "BUTTON" || text.length === 0) return;
  const li = document.createElement("li");
  li.textContent = text;
  dynamicListElem.append(li);
  inpElem.value = "";
});

const delDeviceBtnElem = document.querySelector(".delete-card-btn");
delDeviceBtnElem.addEventListener("click", (e) => {
  const delElem = e.target.closest("div");
  delElem.remove();
});

const planDivElem = document.querySelector(".plans-container");
const priceDisplayParg = document.querySelector("#price-display");

planDivElem.addEventListener("click", (e) => {
  if (!button) return;
  const price = e.target.dataset.price;
  priceDisplayParg.textContent = `Cost is ${price}`;
});

const users = [
  { id: 1, name: "Олена", role: "Admin" },
  { id: 2, name: "Ігор", role: "User" },
  { id: 3, name: "Анна", role: "Moderator" },
];

const contentContainerDivElem = document.querySelector(".users-grid");

const markupFunc = (arr) => {
  return arr
    .map((el) => {
      return `<li>UserId: ${el.id} Name: ${el.name}, Role: ${el.role}</li>`;
    })
    .join(" ");
};
contentContainerDivElem.insertAdjacentHTML("afterbegin", markupFunc(users));

const foodSearchInp = document.querySelector("#search-food");
const foodListElem = document.querySelector("#food-list");

foodSearchInp.addEventListener("input", (e) => {
  const text = foodSearchInp.value.toLowerCase().trim();
  const menuItems = foodListElem.querySelectorAll("li");
  menuItems.forEach((el) => {
    if (el.textContent.toLowerCase().trim().includes(text)) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});
