// DESCRIPTION:
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// Solution:-
// 1)
var result;
function findingNeedle(array){
    for(i=0; i < array.length; i++){
        if(array[i] === "needle"){
            return `Found the needle at position ${array.indexOf('needle')}`
        }
    }
}
findingNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])

// 2)
function findingArray(array){
    return `Found the needle at position ${array.indexOf('needle')}`
}
findingArray(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])


