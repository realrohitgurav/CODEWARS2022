// DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an classPoints with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the classPoints of your class's points. For calculating the average point you may add your point to the given classPoints!

// Solution:-
// 1)
function averageOfClass(classPoints, yourPoints){
    var array = classPoints.reduce((a,c)=> a+c,0)
    if((array/classPoints.length) <= yourPoints){
        return true
    }else{
        return false
    }
}
averageOfClass([8,9,6,7,8,5,6], 9);

// 2)
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}


