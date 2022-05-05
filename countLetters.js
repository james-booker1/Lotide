const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  ${actual}  ===   ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:   ${actual}   !==   ${expected}`);
  }
};

const countLetters = function (words) {
  let count = {};
  for (let letter of words) {
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] = count[letter] + 1;
    }
  }
  console.log(count);
};

assertEqual(countLetters("lightouse in the house"));
