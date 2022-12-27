// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.


// Solution

function sum (arr){
    let result = 0
    for (i=0; i<arr.length; i++){
        result += arr [i]
    }
    return result
}
sum([3, 4, 3, 6])