// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Solution:-
// 1)

function RemoveExclamationMarks(string){
    return string.replaceAll('!', '')
}
RemoveExclamationMarks('uuausdusd!jefdjn!herkf!weoiri!')

// 2)
function removeExclamationMarks(s) {
    return s.split('!').join('');
}

