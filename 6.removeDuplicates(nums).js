/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1] != undefined && nums[i] === nums[i+1]) {
            nums.splice(i+1, 1); 
            i--;
        }
    }
    
    return nums.length; // returns length of final array
};
