// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


// Solution:-
// 1)
let numberedString = '1705'
let splitedStringToArray = numberedString.split('')
let joinedArray = splitedStringToArray[0]+splitedStringToArray[1]

function century(){
    if (splitedStringToArray[3] == 0){
        return joinedArray
    }else{
        return (Math.ceil(joinedArray) + 1)
    }
}
century()

// 2)
function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
  }

