/**
 * @param {number[]} nums
 * @return {number}
 */
function  maxCoins(nums) {
    nums.unshift(1)
    nums.push(1)
    let  len  = nums.length 
    let dp = new Array(len)
    for(let i=0; i<len; i++) {
         dp[i] = new Array(len).fill(0)
    }
   
    for(let gap=2; gap<len; gap++) {
         for(let left=0; left<len-gap; left++) {
               let right = left+gap 
               let cur = 0 
               for(let i=left+1; i<right; i++) {
                    cur = Math.max(cur, dp[left][i] + nums[left]*nums[i]* nums[right] +  dp[i][right])
               } 
             
              dp[left][right] = cur 
         }
    }
  
    return dp[0][len-1]
}