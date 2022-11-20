// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// Solution:-
// 1)
const reverseSeqn = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };

// 2)
const reverseSeq = n => {
    let array = [1,2,3,4,5,6,7]
    var reversed = array.splice(0,n).reverse()
    return reversed
  };

