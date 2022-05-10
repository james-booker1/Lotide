const assert = require('chai').assert;
const without = require('../without');


describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];


  it("when lightouse is called should retunrn only hello world", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]); 
  });
 
});