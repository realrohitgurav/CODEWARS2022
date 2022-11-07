// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Solution:-
// 1)
let min = array[0]
function minimumValue(array){
    for(i=0; i < array.length; i++)
        if(min > array[i]){
            min = array[i]
        }
    return min
}
minimumValue([10,49,322,1000,76,83,93,9])

// 2)
function minimalValue(array){
    let result = Math.min(...array)
    return result;
}
minimalValue([10,49,322,1000,76,83,93,9])