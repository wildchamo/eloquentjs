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

console.log(String(killerRabbit));
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(killerRabbit));

Array.prototype.forEach.call(
  {
    length: 2,
    0: "A",
    1: "B",
  },
  (elt) => console.log(elt)
);

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

let boil = Temperature.fromFahrenheit(212);
console.log(boil.celsius);

let sym = Symbol("name");

let sym2 = Symbol("name");
console.log(sym === sym2);

const length = Symbol("length");
Array.prototype[length] = 150;

console.log([1, 2, 3][length]);
console.log([1, 2, 3].length);

let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }
  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { done: false, value };
  }
}

List.prototype[Symbol.iterator] = function () {
  return new ListIterator(this);
};

let list = List.fromArray([1, 2, 3]);

for (let element of list) {
  console.log(element);
}

class LengthList extends List {
  #length;

  constructor(value, rest) {
    super(value, rest);
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

console.log(LengthList.fromArray([1, 2, 3, 5, 4, 5, 6, 6, 6, 6]).length);
