/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let frequency = {}
    
    for (i of nums){
        if (frequency[`${i}`] == 1){
            return i
        }
        frequency[`${i}`] = (frequency[`${i}`] + 1) || 1;
         
    }
    
};