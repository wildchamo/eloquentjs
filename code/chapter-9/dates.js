console.log(new Date());
console.log(new Date(2009, 10, 9));
console.log(new Date(2009, 10, 9, 12, 59, 59, 9999));

console.log(new Date(2013, 11, 9).getTime());
console.log(new Date(1386565200000));

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);

  console.log(_);
  return new Date(year, month - 1, day);
}

// console.log(getDate("1-30-2003"));
console.log(getDate("100-3-233003"));

console.log(/a(?=e)/.exec("braeburn"));
console.log(/a(?! )/.exec("ab"));

let animalCount = /\d+ (pig|cow|chicken)s?/;

console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("1 chicken"));

/^[01]+b|[\da-f]+h|\d+)/;

console.log("papa".replace("p", "m"));
console.log("Borobudr".replace(/[ou]/, "a"));
console.log("Borobudr".replace(/[ou]/g, "a"));

console.log(
  "Liskov, Barbara \n McCarthy, John \nMilnder, Robin".replace(
    /(\p{L}+), (\p{L}+)/gu,
    "$2 $1"
  )
);

/(\p{L}+), (\p{L}+)/.exec("Liskov, Barbara \n McCarthy, John \nMilnder, Robin");

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount === 1) {
    unit = unit.slice(0, unit.length - 1);
  } else if (amount === 0) {
    amount = "no ";
  }
  return amount + " " + unit;
}

console.warn(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));
