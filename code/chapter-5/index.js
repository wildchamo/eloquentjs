function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// repeat(3, console.error);

let labels = [];

repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);

{
  function greaterThan(n) {
    return (m) => m > n;
  }

  let greaterThan10 = greaterThan(10);

  console.log(greaterThan10(11));
}

{
  function noisy(f) {
    return (...args) => {
      console.log("calling with ", args);
      let result = f(...args);
      console.log("called witg ", args, ", returned ", result);
      return result;
    };
  }

  const minNewFunction = noisy(Math.min);

  minNewFunction(3, 2, 1);
}
