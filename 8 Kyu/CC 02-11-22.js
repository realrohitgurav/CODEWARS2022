// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// P : Are we only going to find the opposites? Are these floating numbers or whole numbers?
// R : Should it only return an opposite number?

// E :

// 1)
const opposite = (integer) =>{
if (integer >= 0){
    return "The number is positive"
}else{
    return "Number is negative"
}
}
opposite(10)

// 2)
function oppositeNumbers(integer){
    return (integer >= 0) ? integer*-1 : integer*-1
}
oppositeNumbers(10)

// P : 
// 1) Create a function and if else statement
// 2) return the function with result