function createStepCounter() {
  let steps = 0;
  return function () {
    steps++;
    return steps;
  };
}
const stepper = createStepCounter();
console.log("Current steps", stepper());
console.log("Current steps", stepper());

function createEcho() {
  let text;
  return function (str) {
    console.log(text === undefined ? str : text);
    text = str;
  };
}
const echo = createEcho();
echo("Привіт"); // "Привіт"
echo("Бувай"); // "Привіт"
echo("Як справи"); // "Бувай"

function greeterFactory(greetingWord) {
  return function (name) {
    return `${greetingWord}, ${name}!`;
  };
}
const sayHello = greeterFactory("Hi");
console.log(sayHello("Oleg"));

function createMoneyBox(holderName) {
  let balance = 0;
  return function (sum) {
    balance += sum;
    return `Account of ${holderName}: has ${balance} hrn.`;
  };
}
const user1 = createMoneyBox("Oleg");
console.log(user1(50));

function taxCalculator(taxRate) {
  return function (value) {
    return `Your tax is: ${value * taxRate}`;
  };
}
const bill = taxCalculator(0.2);
console.log(bill(2000));

function createSecureCounter(correctPassword) {
  let count = 0;
  return function (password) {
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      count++;
      return count;
    } else return "Acsess denied";
  };
}

function createStyleWrapper(cssClass) {
  return function (str) {
    return `<p class="${cssClass}">${str}</p>`;
  };
}
const parg = createStyleWrapper("text-info");
console.log(parg("Dinner starts at 19.00"));
