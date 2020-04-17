// function slidingWindow(arr, num){
//     let count = 0;
//     if(num > arr.length)return arr;
//     let max = -Infinity;
   
//     for(let i = 0; i < arr.length; i++){
//          let temp = 0;
//         for(let j =0; j < num; j++){
//             temp += arr[i+j]
//             count++
//             console.log(temp,"temp",count,"count",  i,"i", j,"j");
//         }
       
//         if(temp>max){
//             max = temp;
//         }  
//     }
//         return max;
// }


// const result =  slidingWindow([12,6,7,18,5,5,7,23,3,5],3)
//console.log(result);
//
function maxSubarrayR(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    let count = 0
    if(arr.length < num)return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
      
    }
    
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
        count++ 
         console.log(count, "count", tempSum, "tempSum", maxSum, "maxSum")
    }
    return maxSum;
}
const max = maxSubarrayR([1,3,5,21,6,7,4], 2)
console.log(max);