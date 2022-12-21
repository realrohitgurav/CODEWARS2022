// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// Solution:-
// 1)
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

// 2)
function shortcut(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}
