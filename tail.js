const assertEqual = require('./assertEqual')


const tail = function(words) {
  let newArray = words.slice(1);
  console.log(newArray);
};

module.exports = tail;