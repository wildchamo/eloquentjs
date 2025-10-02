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
  function isOdd(n, mem) {
    let memory;
    if (n === 0) {
      return false;
    } else if (n === 1) {
      return true;
    } else {
      memory = n - 2;
    }
  }

  isOdd(12, 0);
}
