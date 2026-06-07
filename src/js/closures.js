// Task-1
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
// Task-2
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
// Task-3
function greeterFactory(greetingWord) {
  return function (name) {
    return `${greetingWord}, ${name}!`;
  };
}
const sayHello = greeterFactory("Hi");
console.log(sayHello("Oleg"));
// Task-4
function createMoneyBox(holderName) {
  let balance = 0;
  return function (sum) {
    balance += sum;
    return `Account of ${holderName}: has ${balance} hrn.`;
  };
}
const user1 = createMoneyBox("Oleg");
console.log(user1(50));
// Task-5
function taxCalculator(taxRate) {
  return function (value) {
    return `Your tax is: ${value * taxRate}`;
  };
}
const bill = taxCalculator(0.2);
console.log(bill(2000));
// Task-6
function createSecureCounter(correctPassword) {
  let count = 0;
  return function (password) {
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      count++;
      return count;
    } else return "Acsess denied";
  };
}
// Task-7
function createStyleWrapper(cssClass) {
  return function (str) {
    return `<p class="${cssClass}">${str}</p>`;
  };
}
const parg = createStyleWrapper("text-info");
console.log(parg("Dinner starts at 19.00"));
// Task-8
function createAttemptsLimiter(maxAttempts) {
  let counter = maxAttempts;
  return function (password) {
    const userPassword = "1234";
    counter--;
    return counter >= 0 && userPassword === password;
  };
}
const largo = createAttemptsLimiter(4);
console.log(largo("1234"));
// Task-9
function createTicketGenerator(eventPrefix) {
  let ticketNumber = 0;
  return function () {
    ticketNumber++;
    return `${eventPrefix}-${ticketNumber}`;
  };
}
const ticket = createTicketGenerator("Paris");
console.log(ticket());
console.log(ticket());
// Task-10
function createSimpleBox() {
  let item = null;
  return {
    put(value) {
      if (!item) {
        item = value;
      }
    },
    get() {
      return item;
    },
  };
}
// Task-11
function createToggle() {
  let isActive = false;
  return function () {
    isActive = isActive === false ? true : false;
    return isActive;
  };
}
const status = createToggle();
console.log(status());
console.log(status());
// Task-12
function createRangeLimiter(min, max) {
  return function (num) {
    if (num < min) return min;
    else if (num > max) return max;
    else return num;
  };
}
const range = createRangeLimiter(5, 10);
console.log(range(99));
// Task-13
function filterByLength(minLength) {
  return function (element) {
    return element.length >= minLength;
  };
}
const words = ["я", "код", "програміст", "js"];
console.log(words.filter(filterByLength(4))); // ["програміст"]
// Task-14
function createSmartAdder(baseValue) {
  return function (num) {
    baseValue += num;
    return baseValue;
  };
}
const calc = createSmartAdder(10);
console.log(calc(3));
// Task-15
function createClickSpy(notifyEvery) {
  let counter = 0;
  return function () {
    counter++;
    return counter % notifyEvery === 0 ? true : false;
  };
}
// Task-16
function createSentenceBuilder() {
  const arr = [];
  return function (str) {
    arr.push(str);
    return arr.join(" ");
  };
}
const build = createSentenceBuilder();
console.log(build("Я")); // "Я"
console.log(build("вчу")); // "Я вчу"
console.log(build("javascript")); // "Я вчу javascript"
// Task-17
function passwordLengthChecker(requiredLength) {
  return function (str) {
    return str.length >= requiredLength;
  };
}
// Task-18
function createAdvancedBank(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return `Not enought money`;
      }
    },
  };
}
// Task-19
function createGuestList() {
  const guests = [];
  return {
    addGuest(name) {
      if (!guests.includes(name)) {
        guests.push(name);
      }
    },
    getGuestCount() {
      return guests.length;
    },
  };
}
// Task-20
function createDiscountApplier(discountPercent) {
  return function (arr) {
    return arr.map((el) => el - (el * discountPercent) / 100);
  };
}
