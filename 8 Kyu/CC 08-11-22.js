// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// E : Are there going to be negative integers?

// Solution:-

// 1)

// create a function

function squareSum(numbers){ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++){
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}

// 2)

const arr = [4,5,6,8]
const sum = arr.reduce((a,c =>{
    return 
}),0)
