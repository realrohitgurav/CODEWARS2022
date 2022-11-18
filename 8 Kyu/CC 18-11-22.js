// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution:-
// 1)
function findAverage(array){
    const sum = array.reduce((a,c)=> a+c, 0)
    const avg = (sum / array.length)
    if (array == 0){
        return 0
    }else{
        return avg
    }
}
let array = []
findAverages(array)

// 2)
function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}