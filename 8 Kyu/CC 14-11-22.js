// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// Solution:-
// 1)
function invertedArray(array){
    for(i=0; i<array.length; i++){
        if (array[i] > 0){
            return array.map(e = (e*-1))
        }
    }
}
invertedArray([1,2,3,4,5])


