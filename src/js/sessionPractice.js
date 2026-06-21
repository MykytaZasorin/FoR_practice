function getFarengate(num) {
  const F = num * 1.8 + 32;
  return F;
}
console.log("Task 1 -", getFarengate(15));

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log("Task 2 -", a, b);

function checkBool(arg) {
  return arg ? false : true;
}
console.log("Task 3 -", checkBool(2));

function getNumber(str) {
  return Math.round(parseFloat(str));
}
console.log("Task 4 -", getNumber("24.5px"));

function checkObj(main, copy) {
  return main === copy;
}
console.log("Task 5 -", checkObj({ x: 1 }, { x: 1 }));

// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

function passValidator(str) {
  return str.length >= 8 && str.length <= 20 && str.includes("!");
}
console.log("Task 6 -", passValidator("Checkmypass!"));

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      break;
  }
}
console.log("Task 7 -", calculator(2, 3, "*"));

function checkAge(num) {
  const status =
    num < 18
      ? "child"
      : num >= 18 && num < 65
        ? "adult"
        : num >= 65
          ? "pensioner"
          : "too old";
  return status;
}
console.log("Task 8 -", checkAge(55));

function isYearSpecial(num) {
  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
}
console.log("Task 9 -", isYearSpecial(2016));

function factorial(num) {
  let total = 1;
  let i = 2;

  while (i <= num) {
    total *= i;
    i++;
  }
  return total;
}
console.log("Task 10 -", factorial(5));

const salaries = { Ivan: 1000, Petro: 1500, Anna: 2000 };
let totalSal = 0;
for (let sal in salaries) {
  totalSal += salaries[sal];
}
console.log("Task 11 -", totalSal);

function getNumbersArray(arr) {
  const newArr = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  }
  return newArr;
}
console.log("Task 12 -", getNumbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function drawTree(n) {
  let stars = "";

  for (let i = 1; i <= n; i++) {
    stars += "*";
    console.log(stars);
  }
}
drawTree(5);

console.log("Task 13 ^");

function checkArr(arr) {
  for (let n of arr) {
    if (n < 0) {
      return arr.indexOf(n);
      break;
    }
  }
  return -1;
}
console.log("Task 14 -", checkArr([1, 2, 3, 4, -2]));

function checkPalion(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str.toLowerCase() === reversed.toLowerCase()
    ? "Is paliondrom"
    : "Not a paliondrom";
}
console.log("Task 15 -", checkPalion("шалаш"));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    const newText = str.slice(0, maxlength).concat("...");
    return newText;
  }
  return str;
}
console.log("Task 16 -", truncate("Mistake", 3));

function getFormat(str) {
  const index = str.indexOf(".");
  return str.slice(index + 1);
}
console.log("Task 17 -", getFormat("aria.png"));

function toCamelCase(str) {
  const words = str.split("_");
  const newArr = words.map((word, i) =>
    i === 0 ? word : word[0].toUpperCase() + word.slice(1),
  );

  return newArr.join("");
}
console.log("Task 18 -", toCamelCase("hello_world_style"));

function countLetters(str) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log("Task 19 -", countLetters("abrakadabra"));

function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return { min, max };
}
console.log("Task 20 -", getMinMax([1, 2, 3, 4, 5]));

function delDuplicates(arr) {
  const copy = [];
  for (const el of arr) {
    if (!copy.includes(el)) {
      copy.push(el);
    }
  }
  return copy;
}
console.log("Task 21 -", delDuplicates([1, 2, 2, 3, 4, 4, 5]));

function getSameElements(arr1, arr2) {
  const newArr = [...arr1];
  for (let elem of arr2) {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log(
  "Task 22:",
  getSameElements(["dog", "cat", "duck", "horse"], ["cat", "lama", "elephant"]),
);

function changePlaces(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}
console.log("Task 23 -", changePlaces([1, 2, 3, 4, 5]));

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log("Task 24 -", chunkArray([1, 2, 3, 4, 5], 2));

function arrGetNames(arr) {
  return arr.map((el) => el.name);
}
console.log(
  "Task 25 -",
  arrGetNames([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ]),
);

function checkUserAge(arr) {
  return arr.filter((el) => el.age >= 18);
}
console.log(
  "Task 26 -",
  checkUserAge([
    { name: "Ivan", age: 17 },
    { name: "Olga", age: 23 },
  ]),
);

function getTotalFromArr(arr) {
  return arr.reduce((acc, el) => (acc += el), 0);
}
console.log("Task 27 -", getTotalFromArr([1, 3, 5, 6, 7, 8]));

const products = [
  {
    name: "Book",
    price: 20,
    category: "books",
  },
  {
    name: "T-Shirt",
    price: 30,
    category: "clothes",
  },
  {
    name: "Laptop",
    price: 1200,
    category: "electronics",
  },
  {
    name: "Headphones",
    price: 150,
    category: "electronics",
  },
  {
    name: "Coffee Mug",
    price: 15,
    category: "home",
  },
];
function findMostExpensive(arr) {
  return arr.find((el) => el.category === "electronics" && el.price > 500);
}
console.log("Task 28:", findMostExpensive(products));

function checkNumbersOfArray(arr) {
  return arr.some((el) => el % 10 === 0);
}
console.log("Task 29:", checkNumbersOfArray([1, 3, 4, 6, 7, 8, 10]));
