const assert = require('chai').assert;
const map = require('../map');

describe("#Map", () => {
  const words = ["james", "booker"];
  const number = [1, 2, 3, 4];
  it("Should return the first letter of every word", () => {
    assert.deepEqual(map(words, (word) => word[0]), ["j", "b"]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(map(number, (bob) => bob * 2), [2, 4, 6, 8]); 
 });
});