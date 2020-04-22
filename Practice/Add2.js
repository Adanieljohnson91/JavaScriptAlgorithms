// //With an array of numbers, check to see which pairs add together to meet the target value.
// ([0,3,5,6], 8)
// //expected output [1,2]
// function sumTwo(array, target){
//     if(array.length <= 1){
//         return false;
//     }
//     for(let i = 0; i < array.length; i++){
//         for(let j=i+1; j < array.length; j++){

//             if(array[i]+array[j]=== target){
//                 console.log(i,j);
//                 return [i,j]
//             }
//         }
//     }
//     return false;
// }
// sumTwo([],4)

// 




































// var twoSum = function(nums, target) {
//     if(nums.length <= 1)return console.log('Empty Array');
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
          
//             if(nums[i]+nums[j] === target){
//                 console.log(nums[i], nums[j])
//                 return [[i],[j]]
//             } 
//         }
//     }
    
// };
// twoSum([0,2,3,4,5,6], 10);

// const twoSum = function(nums, target) {
//     const comp = {};
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i]] !== undefined){
//             return [comp[nums[i]] , i]
//         }
//         comp[target-nums[i]] = i;
//     }
// };
