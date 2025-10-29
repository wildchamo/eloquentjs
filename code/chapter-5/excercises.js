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

{
  function loop(value, testFunction, updateFunction, bodyFunction) {
    if (testFunction(value)) {
      return null;
    }

    bodyFunction(value);
    const updatedValue = updateFunction(value);
    return updatedValue;
  }

  let initialValue = 0;

  for (;;) {
    initialValue = loop(
      (value = initialValue),
      (value) => value > 1000,
      (value) => value + 1,
      (value) => console.log(value)
    );

    if (!initialValue) {
      break;
    }
  }
}
