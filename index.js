const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./assertEqual');
const assertEqualArrays = require('./assertArraysEqual');
const map = require('./map');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqualArrays: assertEqualArrays,
  map: map,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without

};