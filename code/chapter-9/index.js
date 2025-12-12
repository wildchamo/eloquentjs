let re1 = new RegExp("abc");

let re2 = /abc/;

let aPlus = /A\+/;

// console.log(re1.test("abcd"));
// console.log(/abc/.test("abxacd"));

console.log(aPlus.test("A+"));

console.log(/[0123456789]/.test(" in 1992"));
console.log(/[0-9]/.test(" in 1992"));
console.log(/[^0-9]/.test("in 1992"));

// \d any digit
// \w aplanumeric

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("01-30-2003 15:20"));

let nonBinary = /[^01]/;

console.log(nonBinary.test("10"));
console.log(nonBinary.test("111110000"));

/[^01]/;

console.log(/[^01]/.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true

/\d+/;

console.log(/\d+/.test("555"));

console.log(/\d*/.test("123"));

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(dateTime2.test("22-12-2004 24:12"));

let cartoonCrying = /boo+(hoo+)+/i;

console.log(cartoonCrying.test("Boohoooohoohooo"));

let match = /\d+/.exec("one two 100");
console.log(match);

console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));

console.log(/(\d)+/.exec("123"));

console.log(/(?:na)+/.exec("banana"));
