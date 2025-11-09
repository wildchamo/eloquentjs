class InputError extends Error {}
for (;;) {
  try {
    let dir = promptDirection(); // ← Typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}

function promptDirection(question) {
  let result = "A";
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";

  throw new InputError("Invalid direction: " + result);
}

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(number1, number2) {
  const successRatio = Math.floor(Math.random(0, 1) * 100);
  if (successRatio >= 80) {
    throw new MultiplicatorUnitFailure(
      "Multiplication failed, failure ratio: " + successRatio
    );
  } else {
    return number1 * number2;
  }
}

function multiply() {
  const value1 = 3;
  const value2 = 4;
  const multiplicationValue = primitiveMultiply(value1, value2);
  console.log(multiplicationValue);
}

try {
  multiply();
} catch (error) {
  if (error instanceof MultiplicatorUnitFailure) {
    console.log(error);
    multiply();
  } else {
    throw error;
  }
}

{
  const box = new (class {
    locked = true;
    #content = [];

    unlock() {
      this.locked = false;
    }
    lock() {
      this.locked = true;
    }

    get content() {
      if (this.locked) throw new Error("Locked!");

      return this.#content;
    }
  })();

  function withBoxUnlocked(funct) {
    const boxInitialStatus = box.locked ? true : false;
    try {
      box.unlock();
      funct();
      console.log(box);
    } catch (error) {
      console.log(error);
    } finally {
      if (boxInitialStatus) {
        box.lock();
      }
      console.log(boxInitialStatus, box);
    }
  }

  const funct2 = () => {
    throw new error("paila");
  };

  withBoxUnlocked(funct2);
}
