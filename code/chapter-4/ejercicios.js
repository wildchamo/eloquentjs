{
  function startToEnd(start, end, step = 2) {
    let realStart = start;

    let realEnd = end;

    // if (end < start) {
    //   realStart = end;
    //   realEnd = start;
    // }
    let returnArray = [];
    for (i = realStart; i <= realEnd; i += step) {
      returnArray.push(i);
    }
    return returnArray;
  }
  function sum(numbersArray) {
    let sum = 0;

    numbersArray.forEach((element) => {
      sum += element;
    });

    return sum;
  }

  const startToEndVal = startToEnd(5, 2, -1);
  console.log(startToEndVal);

  const sumres = sum(startToEndVal);
  console.log(sumres);
}
{
  //reverseArray
  const abc = [2, 3, 4, 5, 6];

  function reverseArray(array) {
    const reversedArray = [];

    const lenght = array.length;
    let aux = 1;
    for (let i = 0; i < lenght; i++) {
      reversedArray.push(array[lenght - aux]);
      aux++;
    }
    return reversedArray;
  }

  function reverseArrayInPlace(array) {
    // Intercambiamos elementos desde los extremos hacia el centro
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

  console.log(reverseArray(abc));
  reverseArrayInPlace(abc);

  console.log(abc);
  º3;
}

{
  function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
}
{
  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };
}

{
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function listToArray(array) {
    const length = array.length;

    let list = [];
    for (i = 0; i <= length - 1; i++) {
      const isTheLast = i === length - 1;

      const object = {
        value: array[i],
        rest: isTheLast ? null : array[i + 1],
      };

      list.push(object);
    }

    let aux = {};
    for (i = length - 1; i >= 0; i--) {
      if (list[i].rest) {
        aux = {
          ...list[i],
          rest: aux,
        };
      } else {
        aux = list[i];
      }
    }

    return aux;
  }

  console.log(listToArray(array));
}

{
  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };

  function listToArray(list) {}
}
// for (i = length - 1; i >= 0; i--) {
//   const isTheLast = i === length - 1;

//   const object = {
//     value: array[i],
//     rest: isTheLast ? null : array[i + 1],
//   };

//   console.log(object);
// }
