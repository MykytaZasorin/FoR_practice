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
console.log(data);
if (data) {
  areaTextElem.value = data;
}

areaTextElem.addEventListener("input", (e) => {
  const text = e.currentTarget.value;
  if (!text) return;
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

startTimerElem.addEventListener("click", () => {
  const id = setInterval(() => {
    count++;
    timerDisplayElem.textContent = count;
  }, 1000);
  stopTimerElem.addEventListener("click", () => {
    clearInterval(id);
  });
});
