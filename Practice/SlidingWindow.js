//Brute Force Sliding Window
function maxSubarraySum(arr, num){
    //Checking to see if the number is greater than array length
    if(num > arr.length)return null;
    // set max to lowest possible number
    let max = -Infinity;
    let n = arr.length
// Check all blocks starting with i, i = 0;
    for(let i = 0; i < n - num +1; i++){
         let temp = 0; 
         
        for(let j = 0; j< num; j++){
            temp += arr[i + j];
        }
        if(temp>max){
            max = temp;
        }
    }
    return max;
}
const gVal = maxSubarraySum([0,1,3,4,6,3,2,7], 2)
console.log(gVal)
// Optimal Solution
// function maxSubarrayR(arr,num){
//     let maxSum = 0;
//     let tempSum = 0;
//     if(arr.length < num)return null;
//     for(let i = 0; i < num; i++){
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for(let i = num; i < arr.length; i++){
//         tempSum = tempSum - arr[i-num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }
// maxSubarrayR([1,3,5,21,6,7,4], 2)
// //Notes
// /**
//  * Identifying a problem that uses a sliding window paradigm
//  * - data structure is ordered and iterable
//  * -you are asked to look for a subRange ie. longest or shortest or target 
//  * -There is an apparent naive or brute force solution that runs in O(N²), O(2^N) or some other large time complexity.
//  * 
//  */
// //Length of longest subString

// const lengthOfLongestSubstring = function(s) {
//     let leftWindow = 0;
//     let longest = 0;
//     let counts = {};
    
//     for (let rightWindow = 0; rightWindow < s.length; ) {
//       if (!counts[s[rightWindow]]) {
//         counts[s[rightWindow]] = 0;
//       }
      
//       counts[s[rightWindow]] += 1;
  
//       if (Object.values(counts).some((element) => element > 1)) {
//         counts[s[leftWindow]] -= 1;
//         leftWindow += 1;
//       }
      
//       longest = Math.max(longest, rightWindow - leftWindow + 1);
//       rightWindow += 1;
//     }
  
//     return longest;
//   };