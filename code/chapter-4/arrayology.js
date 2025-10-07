{
  let todoList = ["1", "2", "3", "4"];

  const todos2 = todoList.shift();

  console.log(todos2);
}
{
  const toSearch = ["1", "2", "2", "4"];

  console.log(toSearch.indexOf("2"));
  console.log(toSearch.lastIndexOf("2"));
}
//The start index is inclusive and the end index is exclusive.

{
  const toSlice = ["1", "2", "3", "4"];

  console.log(toSlice.slice(1, 3));
  console.log(toSlice.slice(1));

  console.log(toSlice.slice());
}
{
  function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
  }
}

{
  const toSearch = "coconut";

  console.log(toSearch.slice(4, 7));
  console.log(toSearch.indexOf("n"));

  console.log("one two three".indexOf("ee"));
}
{
  console.log(" okay ".trim());
}
{
  console.log("6".padStart(10, "0"));
}

{
  let sentence = "The quick brown fox jumps over the lazy dog.";

  let words = sentence.split(" ");

  console.log(words);

  let sentence2 = words.join(" ");

  console.log(sentence2);
}
{
  console.log("hello".repeat(3));
}
{
  let string = "abc";
}

{
  // rest parameters

  function max(...numbers) {
    let result = -Infinity;

    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }

  console.log(max(3, 1, 8));
}

{
  let numbers = [5, 1, 7];

  // function max(...numbers) {
  //   let result = -Infinity;

  //   for (let number of numbers) {
  //     if (number > result) result = number;
  //   }
  //   return result;
  // }

  console.log(...numbers);
}

{
  let words = ["never", "fully"];

  console.log(["will", ...words, "understand"]);
}

{
  let coordinates = { x: 10, y: 0 };
  console.log({ ...coordinates, y: 5, z: 1 });
}
{
  function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
  }

  console.log(randomPointOnCircle(5));
}
{
  console.log(Math.floor(Math.random() * 10));
}

{
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

  function phi2([noo, no1, n10, n11]) {
    return (
      (n11 * noo - n10 * no1) /
      Math.sqrt((n10 + n11) * (no0 + no1) * (n10 + n11) * (no0 + no1))
    );
  }
}
{
  let { name } = { name: "Faraji", age: 23 };

  console.log(name);
}
{
  function city(object) {
    return object.address?.city || "Unknown"; //forma correcta y mas segura
  }

  console.log(city({ address: { city: "Tunis" } }));
  console.log(city({ address: { name: "Vera" } }));
}

{
  console.log("string".notAMethod?.());
  console.log({}.arrayProp?.[0]);
}

{
  // json es data serializada
  let jsonData = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"],
  };

  let encodedJson = JSON.stringify(jsonData);

  console.log(encodedJson);

  console.log(JSON.parse(encodedJson));
}
