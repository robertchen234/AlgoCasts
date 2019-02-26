// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

// function reverseInt(n) {
//   let isNegative = false

//   if (n < 0) {
//     isNegative = true
//   }

//   let str = n.toString()
//   let revNum = parseInt(reverse(str))

//   if (isNegative) {
//      return revNum * -1;
//   } else {
//     return revNum
//   }
// }

function reverseInt(n) {
  let num = n.toString();
  let revNum = parseInt(reverse(num));
  return Math.sign(n) * revNum;
}

module.exports = reverseInt;
