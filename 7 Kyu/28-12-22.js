// DESCRIPTION:
// Your task is to write function factorial.


// Solution / Answer:

function factorial(n){
    let sum = 1;
     for (let i = 1; i <= n; i++){
       sum = sum * i;
     }
     return sum; 
}