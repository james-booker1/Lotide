const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  
  it("For 7 feet it should return Mike", () => {
    assert.deepEqual(findKey(
      {
        James: { noOfFeet: 10 },
        Bobn: { noOfFeet: 9 },
        Peter: { noOfFeet: 8 },
        Kat: { noOfFeet: 9 },
        Mike: { noOfFeet: 7 },
        Lisa: { noOfFeet: 6 },
      },
      (x) => x.noOfFeet === 7
    ),
    "Mike"
  );
  });
 
});