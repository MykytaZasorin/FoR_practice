// Task-1
function countDown(n) {
  if (n < 1) {
    return;
  }
  console.log(n);

  return countDown(n - 1);
}
// Task-2
function countUp(n) {
  if (n < 1) {
    return;
  }
  countUp(n - 1);
  console.log(n);
}
// Task-3
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
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
// Task-12
// Task-13
// Task-14
// Task-15
// Task-16
// Task-17
// Task-18
// Task-19
// Task-20
