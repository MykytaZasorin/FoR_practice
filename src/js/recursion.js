// Task-1
function countDown(n) {
  if (n < 1) {
    return;
  }
  console.log(n);

  return countDown(n - 1);
}
countDown(2);
// Task-2
function countUp(n) {
  if (n < 1) {
    return;
  }
  countUp(n - 1);
  console.log(n);
}
countUp(6);
// Task-3
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(4);
// Task-4
function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}
// Task-5
function pow(num, degree) {
  if (degree === 1) return num;
  return num * pow(num, degree - 1);
}
// Task-6
function getStrLength(str) {
  if (str.length === 0) {
    return 0;
  }
  return 1 + getStrLength(str.slice(1));
}
// Task-7
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}
// Task-8
function printChars(str) {
  if (str === "") {
    return;
  }
  console.log(str[0]);
  printChars(str, slice(1));
}
// Task-9
function printEvens(n) {
  if (n < 2) {
    return;
  }
  if (n % 2 === 0) {
    console.log(n);
  }
  return printEvens(n - 1);
}
// Task-10
function countChar(str, char) {
  if (str === "") return 0;
  if (str[0] === char) {
    return 1 + countChar(str.slice(1), char);
  } else {
    return 0 + countChar(str.slice(1), char);
  }
}
// Task-11
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], findMax(arr.slice(1)));
}
// Task-12
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}
// Task-13
function multiplyArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * multiplyArray(arr.slice(1));
}
// Task-14
function containsNumber(arr, num) {
  if (arr.length === 0) return false;
  if (arr[0] === num) return true;
  return containsNumber(arr.slice(1), num);
}
// Task-15
function printArrayReverse(arr) {
  if (arr.length === 0) return;
  printArrayReverse(arr.slice(1));
  console.log(arr[0]);
}
// Task-16
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
// Task-17
function joinWords(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + " " + joinWords(arr.slice(1));
}
// Task-18
function countDigits(num) {
  if (num < 10) return 1;
  return 1 + countDigits(Math.floor(num / 10));
}
// Task-19
function sumDigits(num) {
  if (num < 10) return num;
  return (num % 10) + sumDigits(Math.floor(num / 10));
}
// Task-20
function repeatStr(str, n) {
  if (n === 1) return str;
  return str + repeatStr(str, n - 1);
}
