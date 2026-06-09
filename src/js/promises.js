function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Done`);
    }, ms);
  });
}
delay(2000).then((message) => console.log(message));

function randomPromise() {
  let number = Math.random();
  return new Promise((resolve, reject) => {
    if (number >= 0.5) {
      resolve("Success");
    } else {
      reject(new Error("Failed"));
    }
  });
}
randomPromise()
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });

function numbers(num) {
  return new Promise((resolve) => {
    resolve(num);
  })
    .then((num) => num * 2)
    .then((result) => result + 5)
    .then((result) => result * result)
    .then((result) => console.log(result));
}
numbers(2);
async function numbersNew(num) {
  try {
    const first = num * 2;
    const second = first + 5;
    const final = second * second;
    return final;
  } catch (error) {
    console.log("NaN");
  }
}
numbersNew(2).then((result) => console.log("Результат async/await:", result));
numbersNew(3).then((result) => console.log("Результат для 3:", result));

async function getData() {
  try {
    const response = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments(),
    ]);
    return response;
  } catch (er) {
    console.log(er);
  }
}

async function getFastestData() {
  try {
    const fastestResponse = await Promise.race([
      fetchUsers(),
      fetchPosts(),
      fetchComments(),
    ]);
    return fastestResponse;
  } catch (er) {
    console.log(er);
  }
}

async function getAllDataSafety() {
  try {
    const results = await Promise.allSettled([
      fetchUsers(),
      fetchPosts(),
      fetchComments(),
    ]);
    return fastestResponse;
  } catch (er) {
    console.log(er);
  }
}

const ids = [1, 2, 3, 4];
const ids = [1, 2, 3, 4];

async function processSequentially() {
  for (const id of ids) {
    console.log(`Почали відправку для ID: ${id}`);
    const result = await sendData(id);
    console.log(`Успішно завершено для ID: ${id}`);
  }
}

async function sendData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ title: "newData" }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    },
  );
  return response.json();
}

processSequentially();

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("file.txt")
  .then((data) => console.log("Проміс повернув дані:", data))
  .catch((err) => console.error("Сталася помилка:", err));

function fetchWithTimeout(url, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout Error"));
    }, timeout);
  });

  const fetchPromise = fetch(url).then((response) => response.json());

  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/photos", 2000)
  .then((data) => console.log("Дані отримано успішно:", data))
  .catch((err) => console.error("Помилка:", err.message));
