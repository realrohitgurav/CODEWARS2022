// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution:-
// 1)
function removeCharacters(str){
    return str.slice(1,-1)
}
removeCharacters("asdjjasjdsajddji")

// 2)
const removeFirstAndLastChar = str1 => {return str1.slice(1,-1)}
removeFirstAndLastChar("helllooooosad")