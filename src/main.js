function createAdvancedCounter() {
  let counter = 0;
  return {
    increment() {
      createAdvancedCounter++;
      return counter;
    },
    decrement() {
      createAdvancedCounter--;
      return counter;
    },
    reset() {
      counter = 0;
      return counter;
    },
  };
}

function tagGenerator(tagName) {
  return function (text) {
    const element = document.createElement(`${tagName}`);
    element.textContent = text;
    return element;
  };
}

function createCalculator() {
  let result = 0;
  return {
    add(x) {
      result += x;
      return this;
    },
    sub(x) {
      result -= x;
      return this;
    },
    multiply(x) {
      result *= x;
      return this;
    },
    getResult() {
      return result;
    },
  };
}

function inArray(arr) {
  return function (element) {
    return arr.includes(element);
  };
}

function limitCalls(fn, maxCalls) {
  let limit = 0;
  return function (...args) {
    if (limit < maxCalls) {
      limit++;
      return fn(...args);
    } else {
      console.log("Limit already used");
    }
  };
}

function createHistoryTracker() {
  const history = [];
  return function (text) {
    history.push(text);
    return history;
  };
}

function createIdGenerator(prefix) {
  let counter = 0;
  return function () {
    counter++;
    return prefix.concat(`_${counter}`);
  };
}

function createSecureVault(secretData, initialPassword) {
  return function (password) {
    if (password === initialPassword) {
      const obj = {
        setNewData(value) {
          secretData = value;
        },
      };
      return secretData;
    } else {
      console.log("Wrong password");
    }
  };
}

const users = [
  { name: "Микита", age: 20 },
  { name: "Олексій", age: 25 },
  { name: "Анна", age: 18 },
];
function sortByField(fieldName) {
  return function (a, b) {
    if (typeof a[fieldName] === "string") {
      return a[fieldName].localeCompare(b[fieldName]);
    }

    return a[fieldName] - b[fieldName];
  };
}

function createCountdown(startNumber) {
  const intervalId = setInterval(() => {
    if (startNumber === 0) {
      clearInterval(intervalId);
      console.log("Time gone");
      return;
    }
    console.log(startNumber);
    startNumber--;
  }, 1000);
}
