function speak(line) {
  console.log(`the ${this.type} rabbit saya ${line} `);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("oh mai rabbit");
hungryRabbit.speak("Im angry 😡");

speak.call(whiteRabbit, "hurry");

let finder = {
  find(array) {
    return array.some((v) => v === this.value);
  },

  value: 10,
};

console.log(finder.find([4, 5]));

let emptyObject = {};

console.log(emptyObject.toString);

console.log(emptyObject.toString());

console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) === Function.prototype);
console.log(Object.getPrototypeOf([]) === Array.prototype);

let protoRabbit = {
  type: "",
  speak(line) {
    console.log("the " + this.type + " rabbit says " + line);
  },
};

let blackRabbit = Object.create(protoRabbit);
// blackRabbit.type = "black";
blackRabbit.speak("Im fear and darkness");
