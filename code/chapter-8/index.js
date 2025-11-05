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
      result = String(n % base) + result;
      n /= base;
    } while (n > 0);
    return sign + result;
  }

  console.log(numberTOString(13, 10));
}
