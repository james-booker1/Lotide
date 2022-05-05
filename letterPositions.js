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

const letterPositions = function (sentence) {
  const output = {};
  const string = sentence.split(" ").join("");
  //console.log(string);
  for (let i = 0; i < string.length; i++) {
    let key = string[i]; //
    let value = i;
    if (key in output) {
      value = output[key];
      value.push(i);
      output[key] = value;
    } else {
      output[string[i]] = [i];
    }
  }
  return output;
};

assertArraysEqual(letterPositions("lightouse in the house").e, [1]);
