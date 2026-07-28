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
