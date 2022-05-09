const assertEqual = require('../assertEqual')
const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertArraysEqual(words.length, 3);