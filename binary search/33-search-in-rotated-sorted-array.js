/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    if (nums === null || nums.length === 0)  return -1 
    
    let start = 0
    let end = nums.length-1 
    
    while(start+1< end) {
        let mid =  start + Math.floor((end-start)/2)
        if (nums[mid] === target)  return mid 
        
        if (nums[start]<nums[mid]) {
            if (nums[start]<=target &&  target<=nums[mid] ) {
                 end = mid
            } else {
                 start= mid
            }
        } else {
            if (nums[mid]<=target && target<=nums[end]) {
                 start =mid
            }else {
                 end=mid
            }
        }
    }
    
    if (nums[start] === target) return  start 
    if (nums[end] === target) return  end
    
    return -1 

}