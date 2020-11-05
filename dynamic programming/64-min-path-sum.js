// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7

/**
 * @param {number[][]} grid
 * @return {number}
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
      
    let m = grid.length 
    let n = grid[0].length 
    
    return helper(m-1, n-1)
    
    function helper(i, j, cache=new Map()) {
          if (i===0 && j ===0)  return grid[0][0]
          if (i<0 || j<0 )  return Number.MAX_SAFE_INTEGER
          if (cache.has(`${i}, ${j}`)) {
              return cache.get(`${i}, ${j}`)    
          }
          let value = grid[i][j] + Math.min(helper(i-1,j, cache), helper(i, j-1, cache))
          cache.set(`${i}, ${j}`, value)
          return value 
    } 
    
}
 
 function minPathSum(grid) {
    let m = grid.length 
    let n = grid[0].length 
    let min = Number.MAX_SAFE_INTEGER    
    dfs(0,0)
    return min 
  
    function dfs(i, j, current=0){
         if (i=== m-1 && j=== n-1) {
               min = Math.min(min, current+ grid[m-1][n-1])
               return 
         }
        
         if (i===m || j === n) return 
         dfs(i+1, j, current+grid[i][j])
         dfs(i, j+1, current+grid[i][j])
    }
  
}





