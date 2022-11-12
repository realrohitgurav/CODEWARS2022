// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Solution:-
// 1)
function arrayDoubled(array){
    let newArray = array.map(n => n*2)
    return newArray
}
arrayDoubled([1,2,3])

// 2)
function maps(x){
    return x.map(n => n * 2);
  }