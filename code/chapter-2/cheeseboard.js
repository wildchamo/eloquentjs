let response = "";

const size = 10;

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    let newLine = "";

    for (let i2 = 0; i2 < size; i2++) {
      if (i2 % 2 === 0) {
        newLine = newLine + "#";
      } else {
        newLine = newLine + " ";
      }
    }
    newLine += "\n";

    response += newLine;
  } else {
    let newLine = "";

    for (let i2 = 0; i2 < size; i2++) {
      if (i2 % 2 === 0) {
        newLine = newLine + " ";
      } else {
        newLine = newLine + "#";
      }
    }
    newLine += "\n";
    response += newLine;
  }
}

console.log(response);
