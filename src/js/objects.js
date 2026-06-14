const car = { brand: "Tesla", model: "Model Y", year: 2024 };

const propertyToRead = "brand";
console.log(car[propertyToRead]);

const gamer = {};
const fieldName = "nickname";
const fieldValue = "X_Sniper_X";
gamer[fieldName] = fieldValue;
console.log(gamer);

const part = "cpu";
const pc = { [part]: "Intel i7" };
console.log(pc);

const settings = { theme: "light", language: "ua" };
function changeSetting(key, value) {
  settings[key] = value;
  return settings;
}
console.log(changeSetting("theme", "dark"));

const product = { id: 101, title: "Машина", price: 500 };
const keyToDelete = "price";
delete product[keyToDelete];
console.log(product);

const player = {
  play: () => "Музика грає",
  stop: () => "Музику зупинено",
};
const action = "stop";
console.log(player[action]());

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
function countFruits(array) {
  const obj = {};
  for (let item of array) {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  }
  return obj;
}
console.log(countFruits(arr));

const user = {
  id: 1,
  profile: {
    name: "Микита",
    avatar: "photo.jpg",
  },
};
const block = "profile";
const field = "name";
console.log(user[block][field]);

const order = { id: 555, delivery: null };
const subField = "address";
// console.log(order.delivery?.[subField]);

const mySecretKey = Symbol("id");
const secretObj = {
  [mySecretKey]: "Таємний пароль",
  title: "Звичайний текст",
};
console.log(secretObj[mySecretKey]);

const users = [
  { name: "Оля", role: "admin" },
  { name: "Ігор", role: "user" },
  { name: "Андрій", role: "admin" },
  { name: "Олена", role: "guest" },
];

function groupByRole(array) {
  const object = {};

  for (let user of array) {
    if (!object[user.role]) {
      object[user.role] = [];
    }
    object[user.role].push(user.name);
  }

  return object;
}
console.log(groupByRole(users));

function updateProfile(oldData, newData, allowedKeys) {
  const updatedProfile = { ...oldData };

  for (let key of allowedKeys) {
    if (newData[key] !== undefined) {
      updatedProfile[key] = newData[key];
    }
  }

  return updatedProfile;
}

const oldUser = { id: 1, name: "Микита", bio: "Привіт", role: "user" };
const hackerChanges = { bio: "Нова біографія", role: "admin" };
const allowed = ["bio", "avatar"];

console.log(updateProfile(oldUser, hackerChanges, allowed));
// addEventListene
