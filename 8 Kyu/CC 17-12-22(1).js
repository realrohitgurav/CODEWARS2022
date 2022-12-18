// DESCRIPTION:
// Given an xay of integers as strings and numbers, return the sum of the xay values as if all were numbers.

// Return your answer as a number.

// Solution:-
// 1)

function sumMix(x) {
  return x.map((ele) => parseInt(ele)).reduce((a, c) => a + c, 0);
}
sumMix([9, 3, "7", "3"]);

// 2)
function sumMix(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
