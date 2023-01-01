// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Solution-

function descendingOrder(n) {
    // Convert the number to an array of digits [4,2,1,4,5]
    const digits = Array.from(n.toString()).map(Number); 
    
    // Sort the array in descending order
    const sortedDigits = digits.sort((a, b) => b - a);
    
    // Join the sorted array back into a single number and return it
    return Number(sortedDigits.join(''));
  }
  