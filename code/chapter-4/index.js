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
{
  let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"],
  };

  console.log(day1.squirrel);
  console.log(day1.wolf);

  day1.wolf = true;

  console.log(day1.wolf);
}
{
  let jose = {
    name: "jose",
    "second name": "chamo",
  };
  jose.name = "luis";

  console.log(jose);

  delete jose.name;

  console.log(jose);

  console.log("name" in jose);
}

{
  const coordinates = {
    x: 0,
    y: 0,
    z: 0,
  };
  console.log(Object.keys(coordinates));
}
{
  let objectA = {
    a: 1,
    b: 2,
  };

  let objectB = {
    b: 3,
    d: 4,
  };

  console.log(Object.assign(objectB, objectA));
}

{
  let journal = [
    {
      events: ["work", "touched tree", "pizza", "running", "television"],
      squirrel: false,
    },
    {
      events: [
        "work",
        "ice cream",

        "cauliflower",
        "lasagna",
        "touched tree",
        "brushed teeth",
      ],
      squirrel: false,
    },
    {
      events: ["weekend", "cycling", "break"],
      squirrel: true,
    },
  ];
}
{
  let object1 = { value: 10 };

  let object2 = object1;
  let object3 = { value: 10 };

  console.log(object1 === object2);
  console.log(object1 === object3);

  object1.value = 15;

  console.log(object2.value);
}
{
  const score = { visitor: 1, local: 1 };

  score.visitor = 2;

  console.log(score);

  score = { visitor: 2, local: 2 };
}
{
  let journal = [];

  function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
  }

  addEntry(["work", "touched tree", "pizza", "running", "television"], false);
  addEntry(
    [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    false
  );
  addEntry(
    [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    true
  );
}
{
  const correlationTable = [15, 10, 20, 30];

  function phi(table) {
    return (
      (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt(
        (table[2] + table[3]) *
          (table[0] + table[1]) *
          (table[1] + table[3]) *
          (table[0] + table[2])
      )
    );
  }

  console.log(phi(correlationTable));
}
const data = [1, 2, 3, 4];

const data2 = functionSumData(data);

console.log(data2);

function functionSumData(data) {
  const returnArray = [];
  for (let value of data) {
    console.log(value);
    value += 1;
    returnArray.push(value);
  }
  return returnArray;
}
