// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution:-
// 1)
function arraySummation(array1, array2){
    var total1 = array1.reduce((a,c)=>a+c,0) + array2.reduce((a,c)=>a+c,0)
    return total1
}
arraySummation([1,2,3], [4,5,6])

// 2)
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }