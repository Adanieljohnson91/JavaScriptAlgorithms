function mergeSort(unsortedArray){
    if(unsortedArray.length <= 1)return unsortedArray;
    let middle = Math.floor(unsortedArray.length / 2);
    let left = unsortedArray.slice(0, middle);
    let right = unsortedArray.slice(middle);
    // test for null values in array
    return merge(mergeSort(left), mergeSort(right));

}
function merge(left, right){
    let result = [], leftIndex=0, rightIndex=0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
        
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
const mrg = mergeSort([1,0,9,2,3,4,5,7,6,4]);
console.log(mrg)