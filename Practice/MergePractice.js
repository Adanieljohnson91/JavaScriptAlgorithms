function mergeSort(unsortedArray){

    if(unsortedArray.length <=1)return unsortedArray;
    let middle = Math.floor(unsortedArray.length / 2)
    let left = unsortedArray.slice(0,middle);
    let right = unsortedArray.slice(middle);
    console.log(merge(mergeSort(left), mergeSort(right)), "merge")
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
    let result = [], leftIndex=0, rightIndex=0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }
        else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    //console.log(left.slice(leftIndex), "concatleft",right.slice(rightIndex), "concatright")
    return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}
console.log(mergeSort([10,6,4,11,2]));

/**
 *  while (leftIndex < left.length && rightIndex < right.length) {
         console.log(left,right)
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
 */