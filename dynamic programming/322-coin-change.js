/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    let dp = new Array(amount+1).fill(-1)
    dp[0] = 0 
   
    for(let i=1; i<=amount; i++) {
        for (let coin of coins) {
            if (i<coin) continue 
            if (dp[i-coin] === -1)  continue
            if (dp[i] === -1) {
                dp[i] = dp[i-coin] +1 
            } else {
                 dp[i] = Math.min(dp[i-coin] +1, dp[i])
            } 
        }
    }
    return dp[amount]
}