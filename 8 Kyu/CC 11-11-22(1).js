// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Solution:-
// 1)
function returning(value){
    if (value % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
returning(32)

// 2)
function returningValue(valueInside){
    return valueInside % 2 === 0 ? "Even" : "Odd"
}
returningValue(32)
