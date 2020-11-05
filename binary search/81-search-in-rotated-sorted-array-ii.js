/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function  search(nums, target) {
    if (nums === null || nums.length === 0) {
         return false 
    } 
  
   let start = 0 
   let end = nums.length-1 
   
   while(start+1<end) {
        let mid =  start + Math.floor((end-start)/2)
        if (nums[mid] === target) {
             return true 
        }
        
        if (nums[mid]>nums[start]) {
            if (target>= nums[start] && target<= nums[mid]) {
                 end= mid 
            }else {
                 start = mid 
            }
       } else if (nums[mid]<nums[start]) {
            if (target>=nums[mid] && target<=nums[end]) {
                 start = mid 
            } else {
                 end = mid 
            }
       } else {
           start++
       }
   }
  
   if (nums[start] === target || nums[end] === target)  return true 
   return false 
  
}