// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reduce((reversed, character) => character + reversed, "");
// }

function reverse(str) {
  let rev = "";
  for (let char of str) {
    debugger
    rev = char + rev;
  }
  debugger
  return rev;
}

reverse("abcde");

module.exports = reverse;
