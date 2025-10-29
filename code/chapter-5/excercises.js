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
      return console.log("condition achieved");
    }

    bodyFunction(value);
    const updatedValue = updateFunction(value);
    console.log(updatedValue);
    return updatedValue;
  }

  function invokeLoop(value = 0) {
    loop(
      value,
      (value) => value === 2,
      (value) => value + 1,
      (value) => console.log(value)
    );
  }

  const initialValue = 0;
  invokeLoop(initialValue);
}
