// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Solution:-

// 1)
function initialLettersOfName(name){
    let splitted = name.charAt(0) + '.' + name.charAt('' + 1)
    return splitted.toUpperCase()
}
initialLettersOfName('Rohit Gurav')

// 2)
function abbrevName(name){
    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
}
