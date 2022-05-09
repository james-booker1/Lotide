const assert = require('chai').assert;
const middle = require('../middle')

describe("Return the middle of the array", (array) => {
  it("If the array is odd it should return the middle number", () => {
    assert.deepEqual(middle([10, 20, 30, 40, 50]), [30]);
  });
  it("If the array is even it should return the two middle numbers", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});

