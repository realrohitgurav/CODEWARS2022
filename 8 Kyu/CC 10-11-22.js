// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// Solution:-
// 1)
const sheepArray = [true,  true,  true,  false, true,  true,  true,  true ,true,  false, true,  false,true,  false, false, true ,true,  true,  true,  true ,false, false, true,  true]

function countingSheeps(){
    let total;
    for(let i=0; i<sheepArray.length; i++){
        if (sheepArray[i] == true){
            total++
        }
    }
    return total
}
countingSheeps()

// 2)
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }
