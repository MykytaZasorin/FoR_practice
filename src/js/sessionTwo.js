const decrementBtnElem = document.querySelector("#decrement");
const incerementBtnElem = document.querySelector("#increment");
const spanValueElem = document.querySelector("#value");
let countTotal = 0;

decrementBtnElem.addEventListener("click", () => {
  if (countTotal === 0) return;
  countTotal--;
  spanValueElem.textContent = countTotal;
});
incerementBtnElem.addEventListener("click", () => {
  countTotal++;
  spanValueElem.textContent = countTotal;
});

const users = [
  { name: "Олена", age: 17 },
  { name: "Микита", age: 22 },
  { name: "Іван", age: 15 },
  { name: "Марія", age: 30 },
];
function filterAdultUsers(users) {
  return users.filter((el) => el.age >= 18);
}
console.log(filterAdultUsers(users));

const themeBtnElem = document.querySelector("#theme-toggle");
themeBtnElem.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const loginFormElem = document.querySelector("#login-form");
const loginInpElem = document.querySelector("#email-input");
const pargErrorMessageElem = document.querySelector("#error");

loginFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = loginInpElem.value;
  if (!value) return;
  if (!value.includes("@")) {
    pargErrorMessageElem.textContent = "Invalid email";
  } else {
    pargErrorMessageElem.textContent = "";
    loginFormElem.reset();
  }
});

const openBtnElem = document.querySelector("#open-btn");
const closeBtnElem = document.querySelector("#close-btn");
const modalElem = document.querySelector("#modal");

openBtnElem.addEventListener("click", () => {
  modalElem.classList.remove("hidden");
  modalElem.style.display = "block";
});
closeBtnElem.addEventListener("click", () => {
  modalElem.classList.add("hidden");
  modalElem.style.display = "none";
});

const shoppingCart = {
  banana: 45,
  apple: 30,
  milk: 42,
  bread: 25,
};
function calculateTotal(cart) {
  const arr = Object.values(cart);
  return arr.reduce((acc, el) => (acc += el), 0);
}
console.log(calculateTotal(shoppingCart));

const todoInpElem = document.querySelector("#todo-input");
const todoBtnElem = document.querySelector("#add-todo");
const todoListElem = document.querySelector("#todo-list");

todoBtnElem.addEventListener("click", () => {
  const todoText = todoInpElem.value.trim();
  if (todoText.length < 5) return;
  const li = document.createElement("li");
  li.textContent = todoText;
  todoListElem.append(li);
  todoInpElem.value = "";
});

const textAreaElem = document.querySelector("#message");
const counterLettersElem = document.querySelector("#char-count");

textAreaElem.addEventListener("input", (e) => {
  const text = e.currentTarget.value;
  const count = text.length;
  counterLettersElem.textContent = count;
});

const fruitSearchInpElem = document.querySelector("#search");
const fruitsListElem = document.querySelector("#fruits");
const fruitsArray = fruitsListElem.querySelectorAll("li");

fruitSearchInpElem.addEventListener("input", (e) => {
  const inputValue = e.currentTarget.value.toLowerCase();
  fruitsArray.forEach((el) => {
    const itemText = el.textContent.toLowerCase();
    el.style.display = itemText.includes(inputValue) ? "block" : "none";
  });
});

function getRandomNumber(min, max) {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}
