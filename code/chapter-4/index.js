// datasets

let listOfNumbers = [2, 3, 4, 5, 6, 7];

console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);

{
  let doh = "Doh";

  console.log(doh);
  console.log(typeof doh);
  console.log(typeof doh.toUpperCase);
  console.log(doh.toUpperCase()); // retorna una copia del string con las mayusculas
  console.log(doh);
}

{
  let seuqence = [1, 2, 3];

  seuqence.push(4);
  seuqence.push(5);

  console.log(seuqence);

  seuqence.pop();

  console.log(seuqence);
}
