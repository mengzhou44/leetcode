// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// For example, given nums = [-2, 0, 1, 3], and target = 2.

// Return 2. Because there are two triplets which sums are less than 2:

// [-2, 0, 1]
// [-2, 0, 3]
// Follow up:
// Could you solve it in O(n2) runtime?

function threeSumSmaller(nums, target) {
    if (nums.length <3)  return [] 
    nums= nums.sort((a,b)=> a-b)
    let result=0
    for(let i=0; i<nums.length; i++) {
         let left =i+1 
         let right = nums.length-1 
         while(left<right) {
             let sum = nums[i]+nums[left] +nums[right]
             if (sum<target) {
                  
                  result++
                  left++
                  right--        
             }else {
                 right--
             }
         }
    }
    return result 

} 

console.log(threeSumSmaller([-2, 0, 1, 3], 2))