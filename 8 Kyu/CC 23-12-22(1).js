// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Solution:-
// 1)
function contamination(text, char) {
  var newStr = "";
  for (i = 0; i < text.length; i++) {
    newStr += char;
    return newStr;
  }
}
contamination("abc", "z");

// 2)
function contamination(text, char) {
  return char.repeat(text.length);
}
