const assertArraysEqual = require(`./assertArraysEqual`);
const eqArrays = require(`./eqArrays`);
/*
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
*/
const takeUntil = function (array, callback) {
  const empty = [];
  for (let item of array) {
    if (!callback(item)) {
      empty.push(item);
    } else return empty;
  }
};
/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
/*const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

const test = [6, 8, 10, 11, 6, 12];

const test3 = [6, 2, 40, 4, 5, 6];

assertArraysEqual(
  takeUntil(test3, (x) => x % 2 !== 0),
  [6, 2, 40, 4]
);
*/
module.exports = takeUntil