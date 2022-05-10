
const assertArraysEqual = require('./assertArraysEqual')
const eqArrays = require('./eqArrays')
/*
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  ${actual}  ===   ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:   ${actual}   !==   ${expected}`);
  }
};
*/
const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
/*
assertEqual(
  findKey(
    {
      James: { noOfFeet: 10 },
      Bobn: { noOfFeet: 9 },
      Peter: { noOfFeet: 8 },
      Kat: { noOfFeet: 9 },
      Mike: { noOfFeet: 7 },
      Lisa: { noOfFeet: 7 },
    },
    (x) => x.noOfFeet === 7
  ),
  "Mike"
);
*/

module.exports = findKey