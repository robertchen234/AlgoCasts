// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {}

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }

//   return charMap
// }

// function anagrams(stringA, stringB) {
//   stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB.replace(/[^\w]/g, "").toLowerCase();

//   const charMapA = {};
//   for (let char of stringA) {
//     charMapA[char] += 1 || 1;
//   }
//   return charMapA;

//   const charMapB = {};
//   for (let char of stringB) {
//     charMapB[char] += 1 || 1;
//   }
//   return charMapB;

//   if (charMapA.length === charMapB) {
//     for (let char of charMapA) {
//       if (charMapA[char] === charMapB[char]) {
//         return true
//       }
//     }
//   } else {
//     return false
//   }
// }

module.exports = anagrams;
