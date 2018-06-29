//Rotates array parameter by integar parameter
//Parameters => arr:array, steps:integar
function rotateArray(arr, steps) {
    var sliceIndex = (arr.length)-steps;
    
    //slice makes a copy of the array, or else this wouldn't work
    var firstHalf = arr.slice(sliceIndex, (arr.length));
    var secondHalf = arr.slice(0, (sliceIndex));
  
    return firstHalf.concat(secondHalf);
  }
  
  rotateArray([1, 2, 3, 4, 5], 3);