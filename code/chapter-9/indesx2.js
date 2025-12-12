let r1 = new RegExp("abc");
let r2 = /abc/;

let aPlus = /A\+/;

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(/[0123456789]/.test("in 1991"));
console.log(/[0-9]/.test("in 1991"));
console.log(/\d/.test("in 1991")); // numero
console.log(/\w/.test("1991")); // cualquier valor alfanumerico
console.log(/\s/.test("in 1991")); // espacio en blanco

console.log(/\D/.test("in")); // valor que no sea un número
console.log(/\W/.test("D")); // valor que no alfanumerico
console.log(/\D/.test("in")); // valor que no sea un número
console.log(
  /./.test(`in
    `)
); // valor que no sea una nueva linea

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("01-30-2003 13:24"));

/[\d.]/;

let nonBinary = /[^01]/;

console.log(nonBinary.test("101"));
console.log(nonBinary.test("121"));
console.log(/\w/.test("abc"));

console.log(/\p{L}/u.test("è"));

console.log(/\p{Script=Greek}/u.test("α"));

console.log(/\d+/.test("123"));
console.log(/\d+/.test("'"));
console.log(/\d*/.test("123"));
console.log(/\d*/.test("'"));

let neighbor = /neighbou?r/;

console.log(neighbor.test("neighbour"));

console.log(neighbor.test("neighbor"));

let dateTimw2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTimw2.test("01-30-2003 13:24"));

let cartooncry = /boo+(hoo+)+/i;
console.log(cartooncry.test("Boohoohoohoohoooooo"));

let match = /\d+/.exec("one two 100");

console.warn(match);

console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/;

console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

console.log(/(?:na)+/.exec("banana"));
