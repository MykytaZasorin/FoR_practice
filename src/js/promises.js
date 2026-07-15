const loadUsersBtnElem = document.querySelector("#load-users-btn");
const usersListElem = document.querySelector("#users-list");

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("404");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const usersMarkup = (arr) => {
  return arr
    .map((el) => {
      return `<li>${el.name}</li>`;
    })
    .join("");
};

loadUsersBtnElem.addEventListener("click", async (e) => {
  usersListElem.innerHTML = "";
  const users = await fetchUsers();
  usersListElem.insertAdjacentHTML("afterbegin", usersMarkup(users));
});

const getPostBtnElem = document.querySelector("#get-post-btn");
const loaderElem = document.querySelector("#loader");
const postTitleElem = document.querySelector("#post-title");
const postBodyElem = document.querySelector("#post-body");

const fetchUserPost = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    if (!response.ok) {
      throw new Error("404");
    }
    const data = await response.json();
    return data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getPostBtnElem.addEventListener("click", async () => {
  loaderElem.classList.remove("hidden");
  const post = await fetchUserPost();
  if (!post) {
    postTitleElem.textContent = "Error";
    loaderElem.classList.add("hidden");
  }
  loaderElem.classList.add("hidden");
  const { title, body } = post;
  postTitleElem.textContent = title;
  postBodyElem.textContent = body;
});

const fakeUrlBtn = document.querySelector("#bad-request-btn");
const errMessageElem = document.querySelector("#error-alert");

const fetchWrongUrl = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-url-here",
    );
    if (!response.ok) {
      errMessageElem.textContent = "Something went wrong";
      return;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    errMessageElem.textContent = `Something went wrong, ${err}`;
  }
};

fakeUrlBtn.addEventListener("click", async () => {
  await fetchWrongUrl();
});

const postFormElem = document.querySelector("#post-form");
const postResultMessage = document.querySelector("#result-message");

const fetchNewPost = async (obj) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (!response.ok) {
      throw new Error("404");
    }
    const message = await response.json();
    console.log(`Post was successfully created with ID:${response.status}`);
  } catch (err) {
    console.log(err);
  }
};

postFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = postFormElem.querySelector("#title-input");
  const body = postFormElem.querySelector("#body-input");
  if (title.value.length < 5 || body.value.length < 5) {
    return;
  }
  const data = { title: title.value, body: body.value };
  fetchNewPost(data);
});
