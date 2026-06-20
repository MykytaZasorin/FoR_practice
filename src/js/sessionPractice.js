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
