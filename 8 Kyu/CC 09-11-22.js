// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

// Solution:-
// 1)

function removingString(string){
    return string.replace(" ", "")
}

removingString("Hello World")

// 2)

const noSpace = x => {return x.replace(' ', '')}
noSpace('8j 8   mBliB8g  imjB8B8  jl  B')

// 3) regex method

function noSpace(x){
    return x.replace(/\s/g, '');
  }
