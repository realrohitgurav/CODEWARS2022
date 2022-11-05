// DESCRIPTION:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// P : Is it always going to be a method?
// R : Does it always take in a Boolean value?


// E :
// 1)
function booleanValue(value){
    return value === true ? "Yes" : "No"
}

booleanValue(true)

// 2)
const booleanChecker = value => value === true ? "Yes" : "No"
booleanChecker(true)
// P :

