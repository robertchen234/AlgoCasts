// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '')
}
module.exports = reverse;


// function reverse(str) {
//   let newArr = [];
//   let splitStr = str.split("");

//   for (let x of splitStr) {
//     newArr.unshift(x);
//   }

//   return newArr.join("");
// }