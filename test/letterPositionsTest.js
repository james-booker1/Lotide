const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("", () => {
    assert.deepEqual(letterPositions("lightouse in the house").i, [1, 9]);
  });
  
});