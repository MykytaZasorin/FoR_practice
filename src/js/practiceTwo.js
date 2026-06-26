const productsListElem = document.querySelector("#products-list");
const products = [
  { id: 1, name: "Ноутбук", price: 25000 },
  { id: 2, name: "Мишка", price: 800 },
  { id: 3, name: "Клавіатура", price: 1500 },
];

function markup(arr) {
  return arr
    .map((el) => {
      return `<li>Product: ${el.name} - price: ${el.price}</li>`;
    })
    .join("");
}
function renderProducts(products) {
  productsListElem.insertAdjacentHTML("afterbegin", markup(products));
}
renderProducts(products);

const areaTextElem = document.querySelector("#note-pad");
const data = localStorage.getItem("areaValue");
if (data) {
  areaTextElem.value = data;
}

areaTextElem.addEventListener("input", (e) => {
  const text = e.currentTarget.value;
  localStorage.setItem("areaValue", text);
});

const tabControlElem = document.querySelector(".tabs-controls");
const tabOneElem = document.querySelector("#tab-1");
const tabTwoElem = document.querySelector("#tab-2");

tabControlElem.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const currentTab = e.target.dataset.target;
  if (currentTab === "tab-1") {
    tabOneElem.style.display = "";
    tabTwoElem.style.display = "none";
  } else {
    tabOneElem.style.display = "none";
    tabTwoElem.style.display = "";
  }
});

const regFormElem = document.querySelector("#register-form");
const authPargElem = document.querySelector("#auth-error");
regFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const inp1 = regFormElem.querySelector("#pass");
  const inp2 = regFormElem.querySelector("#confirm-pass");
  const password = inp1.value.trim();
  const confPassword = inp2.value.trim();
  if (password.length < 6 || password !== confPassword) {
    authPargElem.textContent = "Incorrect password";
    return;
  } else {
    console.log("OK");
    authPargElem.textContent = "";
    regFormElem.reset();
  }
});

const timerDisplayElem = document.querySelector("#timer-display");
const startTimerElem = document.querySelector("#start-timer");
const stopTimerElem = document.querySelector("#stop-timer");
let count = 0;
let timerId = null;

startTimerElem.addEventListener("click", () => {
  if (timerId) return;

  timerId = setInterval(() => {
    count++;
    timerDisplayElem.textContent = count;
  }, 1000);
});

stopTimerElem.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

const team = [
  { name: "Андрій", isActive: true, isPremium: false },
  { name: "Олена", isActive: true, isPremium: true },
  { name: "Ігор", isActive: false, isPremium: false },
];

function hasPremium(arr) {
  return arr.some((el) => el.isPremium);
}
function allActive(arr) {
  return arr.every((el) => el.isActive);
}

const imgElem = document.querySelector("#main-img");
const thumbElems = document.querySelector(".thumbnails");
thumbElems.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const chosen = e.target.dataset.src;
  imgElem.src = chosen;
});

const loadBtnElem = document.querySelector("#load-todo");
const todoTitleElem = document.querySelector("#todo-title");

async function todo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error("404");
    }
    const data = await response.json();
    return data.title;
  } catch (error) {
    console.log("Error:", error);
  }
}
loadBtnElem.addEventListener("click", async () => {
  const title = await todo();
  todoTitleElem.textContent = title;
});

const filtersElem = document.querySelector(".filters");
const itemsArrElem = document.querySelectorAll(".item-card");

filtersElem.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const activeBtn = e.target.dataset.filter;
  itemsArrElem.forEach((el) => {
    const show = activeBtn === "all" || activeBtn === el.dataset.category;
    el.classList.toggle("hidden", !show);
  });

  console.log(activeBtn);
});

const oldUser = {
  uid: "123-abc",
  firstName: "Микита",
  lastName: "Засорін",
  skillsString: "js,html,css",
};
function formatUserFormat(oldUser) {
  const { uid: id, firstName, lastName, skillsString } = oldUser;
  const fullName = firstName + " " + lastName;
  const skills = skillsString.split(",");
  const newObj = { id, fullName, skills };
  return newObj;
}
console.log(formatUserFormat(oldUser));
