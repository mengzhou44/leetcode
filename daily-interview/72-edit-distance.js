// to determine if a problem can be solved in DP
// two conditions:
// 1. optimal substructure
// 2. overlap subproblems

// dp[i][j] the minimum edit distance between word with length i to word with length j 

// three steps:
// 1.  base case 
// 2. update function 
// 3. goal 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
    let m = word1.length+1
    let n = word2.length+1
    let dp = new Array(m)
    for(let i=0; i<m; i++) {
        dp[i] = new Array(n).fill(0)
    }
   
    for(let i=0; i< m; i++) {
         dp[i][0] =i 
    }
   
    for(let i=0; i<n; i++) {
         dp[0][i] =i 
    }

    for(let i=1; i<m; i++) {
        for(let j=1; j< n; j++) {
             if (word1[i-1] === word2[j-1]) {
                 dp[i][j] = dp[i-1][j-1]
             } else {
                 dp[i][j] = dp[i-1][j-1] +1 
             }
            
             dp[i][j] = Math.min(dp[i][j], dp[i-1][j]+1,  dp[i][j-1]+1 )
        }
   }
   
   return dp[m-1][n-1] 
}