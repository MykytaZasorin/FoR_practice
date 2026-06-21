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
