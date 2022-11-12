// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Solution:-
// 1)
let number = 35231
let stringNum = number.toString()
let array = stringNum.split('')
let result = array.reverse()
let final = result.toArray()

// 2)
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }