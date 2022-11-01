// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// PREP 
// Parameters : Is it always going to be an integer? whole numbers & natural numbers? 
// Returns : Is it only going to return even and odd numbers?


// Examples :
// 1) 
function numbers(num){

    if (num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
numbers(10)

// 2)
const numbers1 = num => {
    return num % 2 === 0 ? "Even" : "Odd"
}
numbers1(10)


// Pseudo code :  

// 1) Create a function that takes in a parameter that is an integer
// 2) Create an if else statement to check if it's even or add
// 3) Call the function and pass in the integer as an argument