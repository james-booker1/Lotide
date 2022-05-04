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
  if (array.length < 3) {
    return empty;
  }
  if (array.length % 2 !== 0) {
    let example = Math.floor(array.length / 2);
    let middleNumber = array[example];
    //console.log(example);
    return [middleNumber];
    //console.log(array[array.length / 2])); //return
  }
  if (array.length % 2 === 0) {
    empty.push(array.length / 2);
    empty.push(array.length / 2 + 1);
    return empty;
  }
};
console.log(middle([10, 20, 30, 40, 50]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
