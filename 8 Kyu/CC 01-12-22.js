// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// Parameters:- Numbers and Strings. Mixed Array
// Return:- Sum of the numbers in the array
// Example:- 
// 1)
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

// 2)
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}