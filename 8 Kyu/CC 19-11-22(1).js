// DESCRIPTION:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Solution:-
// 1)
function multiplyingNumbers(num){
    if(num % 2 ===0){
        return num*8
    }else{
        return num*9
    }
}
multiplyingNumbers(4)

// 2)

const numbersMultiplied = num =>{
    num % 2 === 0? (num*8) : (num*9)
}
numbersMultiplied(8)

// 3)
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }

