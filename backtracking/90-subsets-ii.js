function subsetsWithDup(nums) {
    if (nums === null || nums.length === 0)  return []
   
   let result = []
   nums= nums.sort((a,b)=> a-b)
   dfs(0, [])
   
   return result
   
   function dfs(index, subset=[]) {
       result.push(subset)
       
       for(let i= index; i<nums.length; i++) {
            if (i!==index && nums[i] === nums[i-1]) {
                 continue
            }
            subset.push(nums[i])
            dfs(i+1, [...subset])
            subset.pop()
       }
   }
   
}