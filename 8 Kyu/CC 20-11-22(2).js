// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// Solution:-
// 1)
function playingBanjo(name){
    if (name[0].includes('R') || name[0].includes('r') ){
        return name + ' plays banjo'
    }else{
        return name + ' does not play banjo'
    }
}
playingBanjo("rohit")

// 2)
const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
