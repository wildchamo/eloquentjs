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

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log("the " + this.type + " rabbit says " + line);
  }
}

const newRabbit = new Rabbit("new");
const killerRabbit = new Rabbit("killer");

newRabbit.speak("hola");
killerRabbit.speak("hola Jose");

function proto() {}

console.log(Object.getPrototypeOf(proto));
console.log(Object.getPrototypeOf(proto) === Function.prototype);
console.log(Object.getPrototypeOf(killerRabbit) === Rabbit.prototype);

class particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}

let object = new (class {
  getWord() {
    return "hello";
  }
})();

console.log(object.getWord());

class SecretiveObject {
  #getSecret() {
    return "I ate all the plums";
  }

  interrogate() {
    let shallISayIt = this.#getSecret();
    return "never";
  }
}

const secretive = new SecretiveObject();
console.log(secretive.interrogate());
// console.log(secretive.#getSecret());

class RandomSource {
  #max;

  constructor(max) {
    this.#max = max;
  }

  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

const randomSource = new RandomSource(55);

console.log(randomSource.getNumber());

{
  class Rabbit {
    constructor(type) {
      this.type = type;
    }

    speak(line) {
      console.log("the " + this.type + " rabbit says " + line);
    }
  }

  const newRabbit = new Rabbit("new");
  const killerRabbit = new Rabbit("killer");
  Rabbit.prototype.teeth = "small";
  console.log(killerRabbit.teeth);
  killerRabbit.teeth = "long, sharp";
  console.log(killerRabbit.teeth);
}
