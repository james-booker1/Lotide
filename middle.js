const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢Assertion Passed:  ${actual}  ===   ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:   ${actual}   !==   ${expected}`);
  }
};

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

const middle = function (array) {
  //console.log(Math.floor(arr.length / 2));
  let empty = [];
  if (array.length === 1 || array.length === 2) {
    return empty;
  }
  if (array.length % 2 !== 0) {
    return (array.length + 1) / 2;
  }
  if (array.length % 2 === 0) {
    empty.push(array.length / 2);
    empty.push(array.length / 2 + 1);
    return empty;
  }
};
