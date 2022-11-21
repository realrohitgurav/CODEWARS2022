// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// PARAMETERS :- The array is going to be a non-empty array. 

// RESULTS :- Should deploy operations on elements inside the array and return a new array.

// EXAMPLES :- 
    // assert.strictEqual(grow([1, 2, 3]), 6);
    // assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    // assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 

// PSEUDOCODE :-
// 1) Create an non-empty array first.
// 2) Apply operations on the array elements.
// 3) Return with a new array



// Solution:-
// 1)
function reduceButGrow(array){
    var result = array.reduce((a,c)=> a*c,1)
    return result
}
reduceButGrow([1,2,3,4,5])

