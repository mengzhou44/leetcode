/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    
    if (nums.length === 1)   return nums[0] 
    let start = 0 
    let end =  nums.length -1 
    let result = nums[0]
    while(start<=end) {
        let mid = start + Math.floor((end-start)/2)
        
        if (nums[mid]>=nums[start]) {
             result = Math.min(result, nums[start])
             start = mid+1
        } else if (nums[mid]<=nums[end]) {
            result =  Math.min(result, nums[mid])
            end=mid-1
        }
    }
   
    return result 
    
}