export async function fetchWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.4501&longitude=30.5234&current_weather=true",
    );
    if (!response.ok) throw new Error("404");
    const data = await response.json();
    const temperature = data.current_weather.temperature;
    return temperature;
  } catch (er) {
    console.log(er);
    this.weatherBlock.textContent = `Помилка серверу`;
  }
}

export async function fetchJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    if (!response.ok) throw new Error("404");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    this.jokeText.textContent = `Щось пішло не так`;
  }
}
