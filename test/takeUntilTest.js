const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#Map", () => {

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
  const test3 = [6, 2, 40, 4, 5, 6];
  it("1", () => {
    assert.deepEqual(takeUntil(data2, (x) => x === ","), ["I've", "been", "to", "Hollywood"]);
  });
  it("2", () => {
    assert.deepEqual(takeUntil(test3, (x) => x % 2 !== 0),
  [6, 2, 40, 4]);
 });
});