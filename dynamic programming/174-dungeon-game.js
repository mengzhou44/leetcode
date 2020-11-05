/**
 * @param {number[][]} dungeon
 * @return {number}
 */
function calculateMinimumHP(dungeon) {
    let m = dungeon.length 
    let n = dungeon[0].length  
    let dp = new Array(m+1)
    for(let i=0; i<=m; i++) {
        dp[i]= new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    }
   
    dp[m-1][n] = 1
    dp[m][n-1] = 1 
    
    for(let i= m-1; i>=0; i--) {
        for(let j=n-1; j>=0; j--) {
            let minHP= Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j]
            if (minHP<1) {
                 dp[i][j] =1
            } else {
                dp[i][j] = minHP
            }
        }
    }
    return  dp[0][0]
}