// function that will split an array into their smallest forms
function mergeSort (unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
  
    const left = unsortedArray.slice(0, middle); 
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  }
// need a function that will put array back in order 
function merge (left, right) {
   
    let resultArray =[], leftIndex=0, rightIndex=0;
    while (leftIndex < left.length && rightIndex < right.length) {
         console.log(left,right)
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
   
    let target = resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
           
            return target;
  }
 const sortedArray = mergeSort([5,1,4,3,2,76,6])
 console.log(sortedArray)