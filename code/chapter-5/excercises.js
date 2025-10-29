const arrayOfArray = [
  [1, 2, 3],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
];
// expected output = [1,2,3,4,5,6]

function flatten(array) {
  const result = array.reduce((a, b) => {
    const concatedVal = a.concat(b);
    return concatedVal;
  });
  return result;
}

console.log(flatten(arrayOfArray));
