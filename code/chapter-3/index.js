const square = function (x) {
  return x * x;
};

const makeNoise = function () {
  console.log("HOLA");
};

console.log(makeNoise());

const roundTo = function (n, step) {
  let remainder = n % step;

  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));

// bindings

let x = 10;

if (true) {
  let y = 20;
  var z = 30;
}

console.log(z);

const safeMode = false;

let lauchMisiles = function () {
  console.log("SHOOT");
};

if (safeMode) {
  lauchMisiles = function () {
    console.log("NO SHOOT");
  };
}

lauchMisiles();

// notación de declaración

function square(x) {
  return x * x;
}

console.log("The future says:", future());

const future = function () {
  return "You'll never have flying cars";
};

function future() {
  return "You'll never have flying cars";
}

const roundToArrow = (n, step) => {
  let remaindeer = n % step;

  return n - remaindeer + (remaindeer < step / 2 ? 0 : step);
};

function greet(who) {
  console.log("hola " + who);
}

greet("JOSE");

console.log("CHAO");
{
  function square(x) {
    return x * x;
  }

  console.log(square(4, true, "DIO"));
}

{
  function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
}

{
  function greet(who = "jose") {
    console.log(who);
  }

  greet();

  greet("SANTI");
}

{
  function wrapValue(n) {
    let local = n;
    return () => local;
  }

  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);

  console.log(wrap1());
  console.log(wrap2);
}

{
  function multiplier(factor) {
    return (number) => number * factor;
  }

  let twice = multiplier(2);

  let triple = multiplier(3);

  console.log(twice(5));
  console.log(triple(5));
}

{
  function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  console.log(power(2, 10));
}

{
  function findSolution(target) {
    function find(current, history) {
      if (current === target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return (
          find(current + 5, `(${history}) + 5`) ??
          find(current * 3, `(${history} * 3)`)
        );
      }
    }
    return find(1, "1");
  }

  console.log(findSolution(24));
}

// 6, 11, 16, 33
{
  function printFarmInventory(cows, chickens) {
    let cowString = String(cows);

    while (cowString.length < 3) {
      cowString = "0" + cowString;
    }
    let chickenString = String(chickens);

    while (chickenString.length < 3) {
      chickenString = "0" + chickenString;
    }
    console.log(`${cowString} Cows, ${chickenString} Chickens`);
  }

  printFarmInventory(7, 11);
}
{
  function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);

    while (numberString.length < 3) {
      numberString = "0" + numberString;
    }

    const generatedString = `${numberString} ${label}`;
    console.log(generatedString);
  }
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel("Cows", cows);
    printZeroPaddedWithLabel("Chickens", chickens);
    printZeroPaddedWithLabel("pigs", pigs);
  }
  printFarmInventory(1, 2, 3);
}

{
  function zeroPad(number, width) {
    let string = String(number);

    while (string.length < width) {
      string = "0" + string;
    }
    return string;
  }
  function printZeroPaddedWithLabel(number, label) {
    let zeroPaddedString = zeroPad(number);

    const generatedString = `${zeroPaddedString} ${label}`;
    console.log(generatedString);
  }
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel("Cows", cows);
    printZeroPaddedWithLabel("Chickens", chickens);
    printZeroPaddedWithLabel("pigs", pigs);
  }
  printFarmInventory(1, 2, 3);
}
