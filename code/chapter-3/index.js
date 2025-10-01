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
