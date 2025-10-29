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
{
  // everything

  const testArray = [1, 2, 3, 5];

  const testFunction = (x) => x < 6;
  const isInEverything = everything2(testArray, testFunction);

  console.log(isInEverything);

  function everything(array, condition) {
    for (i = 0; i < array.length; i++) {
      const value = array[i];

      const accomplishCondition = condition(value);

      // console.log(accomplishCondition);
      if (!accomplishCondition) {
        return false;
      }
    }
    return true;
  }

  function everything2(array, condition) {
    return !array.some((number) => !condition(number));
  }
}
