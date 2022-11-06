// DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Solution :-

// P : Is this always going to be a positive integer that needs to be converted to a negative? Considering floating numbers too?

// E : 
// 1) 

function makeNegative(num){
    if (num>=0){
        return num*-1
    }else{
        return num*1
    }
}
makeNegative(3)

// 2)
const convertingToNegative = number => {return number>=0 ? (number*-1) : (number*1)};

convertingToNegative(-12313)