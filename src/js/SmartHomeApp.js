import { fetchWeather, fetchJoke } from "./api";

export default class SmartHomeApp {
  constructor() {
    //   Селектори
    this.devices = JSON.parse(localStorage.getItem("home_devices")) || [];
    this.divecesList = document.querySelector("#devices-list");
    this.deviceInpElem = document.querySelector("#device-name");
    this.themeBtn = document.querySelector("#theme-toggle");
    this.jokeText = document.querySelector("#joke-text");
    this.jokeBtn = document.querySelector("#next-joke-btn");
    this.loadMoreBtn = document.querySelector("#add-device-btn");
    this.weatherBlock = document.querySelector("#weather-info");

    const userTheme = localStorage.getItem("theme");
    if (userTheme === "dark") {
      document.body.classList.add("dark");
    }
    this.initWeather();
    this.renderDevices(this.devices);

    this.themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      document.body.classList.contains("dark")
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light");
    });

    this.jokeBtn.addEventListener("click", async () => {
      this.jokeText.textContent = `Завантажую жарт...`;
      const data = await fetchJoke();
      this.jokeText.textContent = `${data.setup}... - ${data.punchline}`;
    });
    this.loadMoreBtn.addEventListener("click", () => {
      this.addDevice();
    });
    this.divecesList.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
      const liElem = e.target.closest("li");
      const lIndex = Number(liElem.dataset.index);
      this.deleteDevice(lIndex);
    });
  }

  // Рендер
  renderDevices(arr) {
    const markup = arr
      .map((elem, index) => {
        return `<li data-index=${index}>${elem.name}<button>Видалити</button></li>`;
      })
      .join("");
    this.divecesList.innerHTML = markup;
  }
  // Методи

  async initWeather() {
    try {
      // 1. Кличемо функцію з api.js і чекаємо на чисте число
      const temp = await fetchWeather();

      // 2. Тепер, коли число у нас, клас спокійно малює його у свій селектор
      this.weatherBlock.textContent = `Київ: ${temp}°C (Дані оновлено)`;
    } catch (error) {
      console.error(error);
      this.weatherBlock.textContent = `Помилка серверу погоди`;
    }
  }

  addDevice() {
    const text = this.deviceInpElem.value;
    if (!text) return;
    const device = { name: text };
    this.devices.push(device);
    localStorage.setItem("home_devices", JSON.stringify(this.devices));
    this.renderDevices(this.devices);
    this.deviceInpElem.value = "";
  }
  deleteDevice(index) {
    this.devices.splice(index, 1);
    localStorage.setItem("home_devices", JSON.stringify(this.devices));
    this.renderDevices(this.devices);
  }
}
