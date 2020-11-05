function rob(nums) {
    if (nums ===null || nums.length === 0)  return  0
    if (nums.length ===1)  return nums[0]
    if (nums.length ===2)  return Math.max(nums[0], nums[1])
   
    let array1= nums.slice(1)
    let array2= nums.slice(0,nums.length-1)
    return Math.max(helper(array1), helper(array2))                   
}

function helper(nums) {
  if (nums ===null || nums.length === 0)  return  0
  let dp = new Array(nums.length+1).fill(0)
  dp[0] = 0 
  dp[1] = nums[0]
   
  for(let i=2;i<dp.length; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2]+ nums[i-1])
  } 
   
  return dp[nums.length]
}