let one = 1,
  two = 2;
console.log(one + two);

// el entorno global tiene sus propios bindings (variables globales) y metodo para interactuar con ellos, como por ejemplo, para seleccionar nodos del DOM o acceder a los archivos del sistema

// ejecutar una función puede decirse, invocar, llamar o aplicar!

console.log(Math.max(2, 4));

let number = Number(prompt("Ingrese un número"));

if (!Number.isNaN(number)) {
  console.log("El número es: " + number);
} else {
  console.log("No es un número");
}

if (1 + 1 == 2) console.log("Correcto");

let number2 = 0;

while (number2 < 10) {
  console.log(number2);
  number2 = number2 + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

let yourName;

do {
  yourName = prompt("Ingrese su nombre");
} while (!yourName);
console.log(yourName);

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

for (let current = 20; ; current = current + 1) {
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}

// con break rompes el ciclo y sigues con la siguiente instrucción del programa
// con continue saltas a la siguiente iteración del ciclo

{
  let counter = 0;

  counter = counter + 1;

  counter += 1;

  for (let number = 0; number <= 12; number += 2) {
    console.log(number);
  }
}

{
  switch (prompt("Ingrese un número")) {
    case "1" || "2" || "3":
      console.log("Unidad");
      break;
    case "4":
      console.log("Dos");
      break;
    case "5":
      console.log("Tres");
      break;
    default:
      console.log("No es un número");
  }
}

/*
 hola
*/

let triangleText = "#";
for (
  let triangleLenght = triangleText.length;
  triangleLenght < 8;
  triangleLenght++
) {
  console.log(triangleText);
  triangleText += "#";
}

for (let iterator = 1; iterator <= 100; iterator++) {
  if (iterator % 3 === 0 && iterator % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (iterator % 3 === 0) {
    console.log("fizz");
  } else if (iterator % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(iterator);
  }
}
