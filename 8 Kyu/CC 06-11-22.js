// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution :-

// P : Is it always going to be a string? Is the string going to be all lowercase or uppercase?

// E :
// 1) 
function string(str){
    return str.split('').reverse().join('')
}
string('world')
string('word')

// 2)

const reversedString = string => {return string.split('').reverse().join('')}
console.log(reversedString('world')); 
console.log(reversedString('word')); 
