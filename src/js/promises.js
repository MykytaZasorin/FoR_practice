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

function fetchWithTimeout(url, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout Error"));
    }, timeout);
  });

  const fetchPromise = fetch(url).then((response) => response.json());

  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/photos/1", 2000)
  .then((data) => console.log("Дані отримано успішно:", data))
  .catch((err) => console.error("Помилка:", err.message));

const myPromise = new Promise((resolve, reject) => {
  resolve("Hello");
});
myPromise.then((result) => console.log(result));

const badPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});
badPromise.catch((error) => console.log(error));

function sayHelloAfterDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Time is out");
    }, 2000);
  });
}

sayHelloAfterDelay().then((result) => console.log(result));

function flipCoin() {
  return new Promise((resolve, reject) => {
    const isEagle = Math.random() >= 0.5;
    if (isEagle) {
      resolve("Eagl");
    } else {
      reject("NotEagle");
    }
  });
}

flipCoin()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

async function getGreeting() {
  return "Hello";
}

async function showResult() {
  const message = await getGreeting();
  console.log(message);
}

async function playGame() {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (error) {
    console.log("We lose, cos dropes", error);
  }
}

async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Сталася помилка, повертаємо дефолтні дані:", error.message);
    return { title: "Стандартне завдання", completed: false };
  }
}

async function getFromTwoUrl() {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const firstData = await response1.json();
  const user = firstData.id;
  const response2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user}`,
  );
  const secondData = await response2.json();
  console.log(secondData);
  return secondData;
}
getFromTwoUrl();

async function getArrData() {
  const [getUsers, getPosts, getComments] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/comments/1"),
  ]);
  const users = await getUsers.json();
  const posts = await getPosts.json();
  const comments = await getComments.json();
  const data = [users, posts, comments];
  return data;
}
console.log(await getArrData());

async function fetchRace() {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Serves is not respound at the time"));
    }, 3000);
  });
  const fetchPromise = await fetch(
    "https://jsonplaceholder.typicode.com/photos",
  ).then((res) => res.json());

  try {
    const whoWin = Promise.race([timeoutPromise, fetchPromise]);
    console.log("Winner is", whoWin);
  } catch (er) {
    console.log("Timeout faster", er.message);
  }
}

function showNotification(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, 1500);
  });
}

const delayFn = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function countToThree() {
  console.log(1);
  await delayFn(1000);
  console.log(2);
  await delayFn(1000);
  console.log(3);
}
countToThree();

// const fastPromise = Promise.resolve("Fast data");
// fastPromise.then((result) => console.log(result));
// const instantError = Promise.reject("Миттєвий вибух");
// instantError.catch((error) => console.log(error));
