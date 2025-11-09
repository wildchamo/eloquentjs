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

let nonBinary2 = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true
