const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
        return false;
      }
      // Need to loop through object inside the object
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `🟢Assertion Passed:   ${inspect(actual)}   !==   ${inspect(expected)}`
    );
  } else {
    console.log(
      `🔴Assertion Failed:   ${inspect(actual)}   !==   ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
assertObjectsEqual(
  { a: "1", b: 2, c: { d: 3 } },
  { b: 2, a: "1", c: { d: 3 } }
);
