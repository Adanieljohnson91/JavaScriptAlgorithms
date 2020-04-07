function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    for (let j = i; j < arr.length; j++) {
      console.log(j);
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
//console.log(sumZero([-3, -2, -1, 0, 2, 3, 4]));

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[right], arr[left]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//Count Unique Numbers
function uniqueCount(arr){
    // could add if statment to check for length and return message if empty
    let counter = 0
    let object = {}
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(object[element]){
            break;
        }else{
            counter++
            object[element] = element;
        }
    }
    return counter

}
const count = uniqueCount([1,2,3,1,1,1])
console.log(count)
//Failed Attempt... Thinking too hard, and your anagram method was stuck in your head
function multiCounter(arr){
    let count, model,start1, start2;
    start1 = 0;
    start2 = 0;
    count = 0;
    model = {}
    if(arr[start1] !== arr[start2] && arr[start1] !== model[arr[start1]] && arr[start2] !== model[arr[start2]]){
        count+2 
        [model[arr[start1]], model[arr[start2]]]===[arr[start1], arr[start2]];
        start1++
    } else if(arr[start1] !== model[arr[start1]]){}

}
// also this only works on a sorted array answer is arr[]
//optimized solution
function countUniqueValues(arr){
    //set i to zero, wiht will be used as a starting point and a referance to its position within the array
    let i = 0;
    //running through a loop when value of index i is not equal to j we are going to increase Is value and swap the value.
    for(let j = 1; j <arr.length;j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1
}