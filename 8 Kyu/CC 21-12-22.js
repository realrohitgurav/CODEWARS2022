// DESCRIPTION:
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string,
// no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// Solution:-
// 1)
function remove(string) {
  return string.replace(/\!$/, ""); // $ searches for the element at the end of the string
}
remove("Hi!!!");

// 2)
function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}
