/**
 * Given an array of intergers, 1 <= a[i] <= n (n = size of array)
 * some elements apprear twice and some once; Find all elements that
 * appear twice in array. do without extra space and in O(n) runtime
 *
 * input [4,3,2,7,8,2,3,1];
 * output [2,3];
 *
 * What do we know about this problem?
 *
 * What are some questions we will need to ask?
 *
 *
 */
function frequency(nums) {
  let outputArr = [];
  for (let i = 0; i < nums.length; i++) {
    let currentIndex = Math.abs(nums[i]) - 1;
    
    if (nums[currentIndex] < 0) outputArr.push(currentIndex + 1);//current index is being brought back to actual value.
    nums[currentIndex] = -nums[currentIndex];
    console.log(currentIndex, "currentIndex", nums[currentIndex], "nums[currentIndex]",currentIndex + 1, "currentIndex + 1", outputArr, "array");
  }
  return outputArr;
}
let input = [3,4,-1,-3,2,6];
//-3
frequency(input);





// var intToRoman = function (num) {
//   let pow = 10;
//   if (!num) return "";

//   const INT_TO_ROMAN_MAPPING = {
//     1: "I",
//     2: "II",
//     3: "III",
//     4: "IV",
//     5: "V",
//     6: "VI",
//     7: "VII",
//     8: "VIII",
//     9: "IX",
//     10: "X",
//     20: "XX",
//     30: "XXX",
//     40: "XL",
//     50: "L",
//     60: "LX",
//     70: "LXX",
//     80: "LXXX",
//     90: "XC",
//     100: "C",
//     200: "CC",
//     300: "CCC",
//     400: "CD",
//     500: "D",
//     600: "DC",
//     700: "DCC",
//     800: "DCCC",
//     900: "CM",
//     1000: "M",
//     2000: "MM",
//     3000: "MMM",
//   };

//   let newNum = Math.floor(num / pow) * pow;
//   console.log(newNum, "new num original");
//   let remainder = num % pow;
//   let solStr = "";

//   while (newNum || remainder) {
//     if (INT_TO_ROMAN_MAPPING.hasOwnProperty(remainder)) {
//       solStr = INT_TO_ROMAN_MAPPING[remainder] + solStr;
//     }

//     pow *= 10;
//     remainder = newNum % pow;
//     newNum = Math.floor(newNum / pow) * pow;
//     console.log(remainder, "remainder", newNum);
//   }

//   return solStr;
// };
