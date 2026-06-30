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
