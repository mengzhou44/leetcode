function rob(nums) {
    let dp = new Array(nums.length+1).fill(0)
    dp[0]=0 
    dp[1] = nums[0]
   
    for(let i=2; i<nums.length+1; i++) {
         dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i-1])
    }
  
    return dp[nums.length]
}