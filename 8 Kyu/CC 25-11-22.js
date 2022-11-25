// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Paramters - Given a string of numbers, it will never be an empty string

// Results - Should return numbers below 5 as 0 and above 5 as 1

// Examples - 
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

// Pseudocode:-

// 1)
function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
}

// 2)
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// 3)
function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}
