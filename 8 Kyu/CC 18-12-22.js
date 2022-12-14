// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// Solution:-
// 1)

function doubleChar(str) {
  var out = "";
  for (var i = 0; i < str.length; i++) {
    out = out + (str[i] + str[i]);
  }
  return out;
}

// 2)
const doubleChar = (str) => str.split("").map(c => c + c).join("");
