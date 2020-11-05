/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    if (triangle.length === 1) return triangle[0][0]
    let m = triangle.length
    let dp = [...triangle[m - 1]]

    for (let row = m - 2; row >= 0; row--) {
        updateDP(row, dp, triangle)
    }
    return dp[0]
}

function updateDP(row, dp, triangle) {
    for (let j = 0; j < triangle[row].length; j++) {
        dp[j] = Math.min(dp[j] + triangle[row][j], dp[j + 1] + triangle[row][j])
    }
}
