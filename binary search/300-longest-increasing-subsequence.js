/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    if (nums.length === 0)  return 0 
    let n = nums.length
    
    let dp = new Array(n).fill(0)
    let maxLen = 1
    for(let i=0; i<n; i++) {
        let len =1 
        for(let j=0; j<i; j++) {
             if (nums[j]<nums[i]) {
                len = Math.max(len,  dp[j]+1)
             }
        }
        dp[i] = len
        if (dp[i]>maxLen) {
             maxLen = dp[i]
        }
    }
    
    return maxLen
    
}