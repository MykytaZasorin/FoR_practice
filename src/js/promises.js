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

// Promise.rase - не знаю що це таке

// Promise.allSettled - не знаю також
