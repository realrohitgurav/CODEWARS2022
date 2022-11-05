// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?


// P : Is it always going to be an integer? Always a function? 
// R : Always transforms into a string?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// P :
// 1) 
function transformNumbers(integer){
    return integer.toString()
}
transformNumbers(100)

// 2)
const numbersToStrings = integers => {return integers.toString()}

numbersToStrings(100)