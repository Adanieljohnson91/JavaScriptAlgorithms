function mergeSort(unsortedArray){

    if(unsortedArray.length <=1)return unsortedArray;
    let middle = Math.floor(unsortedArray.length / 2)
    let left = unsortedArray.slice(0,middle);
    let right = unsortedArray.slice(middle);
   // console.log(merge(mergeSort(left), mergeSort(right)), "merge")
   let msl = mergeSort(left)
   let msr = mergeSort(right)
    console.log(msl, "mergeleft", msr, "merge right")
    let current = merge(mergeSort(left), mergeSort(right))  
    console.log(current, "current")
    return current
}
function merge(left, right){
    let result = [], leftIndex=0, rightIndex=0;
  //  console.log(leftIndex, rightIndex, "pass")
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
          //  console.log("passLeft")
        }
        else{
            result.push(right[rightIndex])
            rightIndex++
           // console.log("passRight")
        }
    }
    //console.log(left.slice(leftIndex), "concatleft",right.slice(rightIndex), "concatright")
    console.log(result, left, right);
    return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}
mergeSort([10,6,4,11,2, 7, 21, 25, 32, 1,3]);

/**
 *  while (leftIndex < left.length && rightIndex < right.length) {
         console.log(left,right)
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
 */