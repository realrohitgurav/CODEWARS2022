// DESCRIPTION:
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// Solution:-
// 1)
function litres(time) {
    var total = (Math.round(time) - 1)
    var finalTotal = (total / 2)
    return finalTotal
  }
litres(2.5)

// 2)
function litres(time) {
    return Math.floor(time * 0.5);
  }