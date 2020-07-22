// //With an sorted of numbers, check to see which pairs add together to meet thetargetSum value.
// ([0,3,5,6], 8)
// //expected output [1,2]
// function sumTwo(sorted,targetSum){
//     if(sorted.length <= 1){
//         return false;
//     }
//     for(let i = 0; i < sorted.length; i++){
//         for(let j=i+1; j < sorted.length; j++){

//             if(sorted[i]+sorted[j]===targetSum){
//                 console.log(i,j);
//                 return [i,j]
//             }
//         }
//     }
//     return false;
// }
// sumTwo([],4)

// 
// const lengthOfLongestSubstring=(s)=>{
//     let count = 0
//     let dict = {};
//     let maxCount = 0;
//     if(s.length <= 1)return s.length;
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j ++){
//             console.log(dict, "dict", j)
//             if(dict[s[j]]>= 1){
//                 maxCount = Math.max(count, maxCount);
//                 count = 0;
//                 dict = {}
//                 break;
//             } else{
//                 dict[s[j]] = 1
//                 count ++
//             }

//         } 
//     }
//     console.log(maxCount);
//     return maxCount
// }
// lengthOfLongestSubstring("aababcabcd");

// var lengthOfLongestSubstringV2 = function(s) {
//     let maxCounter = 0;
//     let counter = 0;
//     let dict = {}; 
//     if(s.length < 2) {
//         return s.length;
//     }
//     for(let i = 0; i < s.length;  i++) {
//         if(dict[s[i]] == null) {
//             counter += 1;
//         } else {
//             counter = Math.min(i - dict[s[i]], counter + 1);
//         }
//         maxCounter = Math.max(maxCounter, counter);
// //         dict[s[i]] = i; //save the i
// //     }
// //     console.log(maxCounter)
// //     return maxCounter;
// // };
// // lengthOfLongestSubstringV2("aaaaaaa")

// function longestCountOfString(string){
//     let counter = 0;
//     let maxCount = 0;
//     let dictionary = {};
//     if(string.length < 2) return string.length;

//     for(let i = 0; i <string.length; i++){
//         if(dictionary[string[i]]=== undefined){
//             counter++
//         }else{
//             counter = Math.min(i - dictionary[string[i]], counter++);
//         }
//         maxCount = Math.max(counter, maxCount)
//         dictionary[string[i]] = i;

//     }
//  //   console.log(maxCount)
//     return maxCount
// }
// longestCountOfString("dvdf")

// function longStringCounter(s){
//     let counter = 0;
//     let maxCount = 0;
//     let dict = {};
//     if(s.length < 2)return s.length;
//     for(let i = 0; i < s.length; i++){
//         if(dict[s[i]]=== undefined){
//             counter++
//         }else{
//             console.log(i, "i", dict[s[i]], "dict", counter++, "counterVal")
//             counter = Math.min(i - dict[s[i]], counter++)
//         }
//         maxCount = Math.max(counter, maxCount);
//         dict[s[i]] = i;
//         console.log(dict, "dictionary")
//     }
//     console.log(maxCount)
//     return maxCount;
// }
// longStringCounter("aaaaaa")

// var fizzBuzz = function(n) {
//     let arr = []
//     for(let i = 1; i<= n; i++){

//         if( i % 3 === 0 && i % 5 === 0){
//             console.log('hit')
//             arr.push("FizzBuzz")
//         }else if( i % 3 === 0 ){
//             arr.push("Fizz")
//         }else if( i % 5 === 0){
//             arr.push("Buzz")
//         }
//          else{
//             arr.push(String(i))
//         }
//     }


// };
// fizzBuzz(1);

// 0
// function twoNumberSum(nums,targetSum) {
// let sorted = nums.sort((a,b)=>{
//     return a - b
// });
// let left = 0;
// let right = sorted.length  -1
// while(left < right){
//     currentSum = sorted[left] + sorted[right]

//     if(currentSum ===targetSum){
//         return [sorted[left], sorted[right]]
//     }else if(currentSum <targetSum){
// //         left++
// //     }else{
// //         right--
// //     }
// // }
// // return []
// // }
// // twoNumberSum([2,13,4,-5,6], 10);

// //taking in nums of nums
// //to find a target
// //Iterate over each number and add
// [0, 1, 2, 3, 4, 5];



// function addTwoNumbers(nums, target) {
//     let obj = {};
//     for(let i =0; i <nums.length; i++){ 
//         if(obj[nums[i]] !== undefined){
//             return [obj[nums[i]], i]
//         } else {
//              obj[target - nums[i]] = i;
//         }
//     }
//     console.log('invalid');
// }
// addTwoNumbers([0, 1, 2, 3, 6], 7);

//Add two numbers given an nums of numbers and a target numbners
// return two indicies that equal the target.
// need for loop, maybe nested, 

function addTwoNumbers(nums, target){
 let obj = {};
 for (let i = 0; i < nums.length; i++) {
     obj[Number(target - nums[i])] = i; 
     if(obj[nums[i]] !== undefined) {
         console.log(obj)
        return [obj[nums[i]], i]
    }
 }
 return false;
}
addTwoNumbers([3,5,7,6,3,2,8], 15);

// {
// '7': 6, 
// '8': 2, 
// '9': 3, 
// '10': 1,
// '12': 4,
// '13': 5 
// }


































// var twoSum = function(nums,targetSum) {
//     if(nums.length <= 1)return console.log('Empty sorted');

//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){

//             if(nums[i]+nums[j] ===targetSum){
//                 console.log(nums[i], nums[j])
//                 return [[i],[j]]
//             } 
//         }
//     }

// };
// twoSum([0,2,3,4,5,6], 10);

// const twoSum = function(nums,targetSum) {
//     const comp = {};
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i]] !== undefined){
//             return [comp[nums[i]] , i]
//         }
//         comp[target-nums[i]] = i;
//     }
// };
