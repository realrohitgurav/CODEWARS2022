// DESCRIPTION:
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// Solution:-
// 1)
function findValue(a){
    let answer = a.includes(3)
    return answer
}
findValue(["hello", 'X', 3, 7])

// 2)
const check = (a,x) => a.includes(x);

