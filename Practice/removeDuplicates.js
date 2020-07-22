var removeDuplicates = function(nums) {
    for(let i = nums.length -1; i > 0; i--){
        // instanciating i at nums.length - 1 this brings the value to 0 based vs 1 based
        // as long as i is greater than 0, we will going thrpough the array in reverse
     if(nums.indexOf(nums[i]) !== i) {
       nums.splice(i, 1);
     }
   }
   
   return nums.length;
};