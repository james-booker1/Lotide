const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#CountLetter", () => {
  
  it("Should bob should return b: 2, o: 1", () => {
    assert.deepEqual(countLetters("bob"), {b: 2, o: 1} );
  });
  
});