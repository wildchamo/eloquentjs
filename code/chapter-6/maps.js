let ages = {
  Boris: 39,
  Jose: 15,
};

console.log("Boris age is " + ages["Boris"]);
console.log("is soString age known? ", "toString" in ages);

console.log("toString" in Object.create(null));
//

let agesMap = new Map();
agesMap.set("Boris", 39);
agesMap.set("Jose", 15);

console.log(agesMap);
console.log(agesMap.get("Boris"));

console.log("is soString age known? ", agesMap.has("toString"));

console.log(Object.hasOwn({ x: 1 }, "x"));
console.log(Object.hasOwn({ x: 1 }, "toString"));
