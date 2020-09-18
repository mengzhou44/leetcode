function longestPalindrome(s) {
  if (s === null || s.length === 0) return s

  let dp = new Array(s.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length)
  }
  let result = s[0]
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[i][j] = true
      } else {
        if (s[i] !== s[j]) {
          dp[i][j] = false
        } else {
          dp[i][j] = j - i <= 2 || dp[i + 1][j - 1]

          if (dp[i][j] === true && result.length < j - i + 1) {
            result = s.substring(i, j + 1)
          }
        }
      }
    }
  }

  return result
}
