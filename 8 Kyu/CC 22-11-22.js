// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Solution:-
// 1)

function strToArray(str){
    var array = []
    for(i=0; i<str.length; i++){
        var ans = str.split(' ')
        return array = ans
    }
}
strToArray("Robin Singh")
strToArray('I love arrays they are my favorite')

// 2)
const stringToArray = string => string.split(' ');
stringToArray('I love arrays they are my favorite')
