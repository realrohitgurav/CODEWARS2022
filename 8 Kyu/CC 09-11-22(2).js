// DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// Solution:-
// 1)

let op = ['+', '-', '*', '/']
let num1 = [4,15,5,49]
let num2 = [7,18,5,7]
let total;
function returningOperation(op, num1, num2){
    for(i=0; i<num1.length; i++){
        total = num1 + op[i] + num2
        return total
    }
}

returningOperation()

// 2)
function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}

// eval() method executes strings as code 
