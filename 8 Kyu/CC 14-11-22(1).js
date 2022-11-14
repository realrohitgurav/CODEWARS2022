// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Solution:-
// 1)
let newArray = []
function sumOfArray(array){
    for(i=0; i<array.length; i++){
        if(array[i]>0){
            newArray = array.reduce((a,c)=>{
                
            }, 0)
        }
    }
}
sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

// 2)
function countPositivesSumNegatives(input) {
    if(!input || input.length == 0) return [];
  
    var positiveCount = input.reduce((sum, item) => item > 0 ? ++sum : sum, 0);
    var negativeSum = input.reduce((sum, item) => item < 0 ? sum + item : sum, 0);
    
    return [positiveCount, negativeSum];
  }

