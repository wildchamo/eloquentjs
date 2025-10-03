{
  function min(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
}

{
  function isOdd(n) {
    if (n === 0) {
      return false;
    } else if (n === 1 || n === -1) {
      return true;
    } else {
      return isOdd(n - 2);
    }
  }

  const isOdd2 = isOdd(13);
  console.log(isOdd2);
}

{
  // count how many B are in the string
  function countBs(string) {
    let numberofBs = 0;

    for (i = 0; i <= string.length; i++) {
      if (string[i] === "B") {
        numberofBs++;
      }
    }

    return numberofBs;
  }

  console.log(countBs("ABCBBBB"));

  function countCharacters(string, letterToBeSearch) {
    let numberofCharacters = 0;

    for (i = 0; i <= string.length; i++) {
      if (string[i] === letterToBeSearch) {
        numberofCharacters++;
      }
    }

    return numberofCharacters;
  }
  console.log(countCharacters("ABCBBBB", "A"));
}
