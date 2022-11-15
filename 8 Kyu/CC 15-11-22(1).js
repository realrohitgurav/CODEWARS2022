// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// Solution:-
// 1)
function invertedArray(mainArray){
    for (i=0; i<mainArray.length; i++){
        if(mainArray[i]>0){
            return mainArray.map(ele => ele*-1)
        }
    }
}
invertedArray([1,-2,3,-4,5])

// 2)
function invert(array) {
    return array.map(e=> e*-1);
 }