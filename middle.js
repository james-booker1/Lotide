const assertArraysEqual = require('./assertArraysEqual')
const eqArrays = require('./eqArrays')



const middle = function (array) {
  //console.log(Math.floor(arr.length / 2));
  let empty = [];
  if (array.length < 3) {
    return empty;
  }
  if (array.length % 2 !== 0) {
    let example = Math.floor(array.length / 2);
    let middleNumber = array[example];
    //console.log(example);
    return [middleNumber];
    //console.log(array[array.length / 2])); //return
  }
  if (array.length % 2 === 0) {
    empty.push(array.length / 2);
    empty.push(array.length / 2 + 1);
    return empty;
  }
};



module.exports = middle