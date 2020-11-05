/**
 * @param {character[][]} matrix
 * @return {number}
 */
function  maximalSquare(matrix) {
    if (matrix === null || matrix.length === 0)  return 0 
    let m= matrix.length
    let n = matrix[0].length 
    let dp =  new Array(m+1)
    for(let i=0; i<dp.length; i++) {
         dp[i] = new Array(n+1).fill(0)
    }
    let max = 0  
    for(let i=1; i<dp.length; i++) {
         for(let j=1;j<dp[0].length; j++) {
             if (matrix[i-1][j-1] === '1') {
                   dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) +1
                   max= Math.max(max, dp[i][j])
             } 
         }
    }
   
    return max*max
}