function getFarengate(num) {
  const F = num * 1.8 + 32;
  return F;
}
console.log(getFarengate(15));

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

function checkBool(arg) {
  return arg ? false : true;
}
console.log(checkBool(2));

function getNumber(str) {
  return Math.round(parseFloat(str));
}
console.log(getNumber("24.5px"));

function checkObj(main, copy) {
  return main === copy;
}

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
console.log(calculator(2, 3, "*"));

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
console.log(checkAge(55));

function isYearSpecial(num) {
  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
}
console.log(isYearSpecial(2016));
