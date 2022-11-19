// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Solutions:-
// 1)
function calculatingBMI(weight, height){
    let totalBmi  = (weight / (height*height))
    if (totalBmi <= 18.5){
        return "Underweight"
    }else if(totalBmi <= 25.0){
        return "Normal"
    }else if(totalBmi <= 30.0){
        return "Overweight"
    }else{
        return "Obese"
    }
}
calculatingBMI(70, 5)

// 2)
function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  bmi(75, 180)
