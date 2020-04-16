function quickSortBasic(array) {
    if(array.length < 2) {
      return array;
    }
  
    var pivot = array[0];
    var lesserArray = [];
    var greaterArray = [];
  
    for (var i = 1; i < array.length; i++) {
      if ( array[i] > pivot ) {
        greaterArray.push(array[i]);
        console.log(greaterArray, "greater")
      } else {
        lesserArray.push(array[i]);
        console.log(lesserArray, "lesser")
      }
    }
  
    return quickSortBasic(lesserArray).concat(pivot, quickSortBasic(greaterArray));
  }
  const qs = quickSortBasic([3,6,4,2,1,7])
  console.log(qs)
  //Understanding Piviots in Quick