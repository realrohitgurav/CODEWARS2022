// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number.
// E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// Solution:-
// 1)
function getNumberFromString(s) {
  var num = Number(s.match(/\d/g).join(""));
  return num;
}
getNumberFromString("hell5o wor6ld");

// 2)
function getNumberFromString(s) {
  return parseInt(s.replace(/[^\d]+/g, ""), 10);
}
