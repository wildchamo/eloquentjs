"use strict";
function canYouSoptTheProblem() {
  "use strict";
  for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
canYouSoptTheProblem();
{
  function Person(name) {
    this.name = name;
  }

  let ferdinand = new Person("Ferdinand");

  console.log(ferdinand);
}

{
  // (graph: Object) ...
  function findROute(graph, from, to) {}
}
{
  function numberTOString(n, base = 10) {
    let result = "",
      sign = "";

    if (n < 0) {
      sign = "-";
      n = -n;
    }

    do {
      console.log(n);
      result = String(n % base) + result;
      n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
  }
  const res = numberTOString(13, 10);
  console.log(typeof res, res);
}
{
  function promptNumber(question) {
    const result = Number(prompt(question));

    if (Number.isNaN(result)) return null;
    else return result;
  }

  console.log(promptNumber("Enter a number"));
}

function lastElement(array) {
  if (array.length == 0) {
    return {
      failed: true,
    };
  } else {
    return { value: array[array.length - 1] };
  }
}

function promptDirection() {
  let result = "rightt";
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";

  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}
try {
  console.log("you see", look());
} catch (e) {
  console.log("Something went wrong", e);
  console.log("Something went wrong", e.message);
  console.log(e.stack);
}
{
  const accounts = {
    a: 100,
    b: 0,
    c: 20,
  };

  function getAccount() {
    let accountName = "a";
    if (!Object.hasOwn(accounts, accountName)) {
      throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
  }

  function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
  }

  function transfer2(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;

    try {
      accounts[from] -= amount;
      progress = 1;
      accounts[getAccount()] += amount;
      progress = 2;
    } finally {
      if (progress == 1) {
        accounts[from] += amount;
      }
    }
  }
}

class InputError extends Error {}
for (;;) {
  try {
    let dir = promptDirection(); // ← Typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}

function promptDirection(question) {
  let result = "A";
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";

  throw new InputError("Invalid direction: " + result);
}
{
  function firstElement(array) {
    if (array.length == 0) {
      throw new Error("empty array");
    }
    return array[0];
  }
}
