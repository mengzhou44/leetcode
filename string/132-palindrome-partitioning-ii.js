/**
 * @param {string} s
 * @return {number}
 */
function minCut(s) {
  let n = s.length
  let isPal = new Array(n)
  for (let i = 0; i < n; i++) {
    isPal[i] = new Array(n).fill(false)
  }
  for (let j = 0; j < n; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        isPal[i][j] = true
      } else if (j - i <= 2) {
        isPal[i][j] = s[i] === s[j]
      } else {
        isPal[i][j] = s[i] === s[j] && isPal[i + 1][j - 1]
      }
    }
  }

  let minPal = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  minPal[n] = 0

  for (let k = n - 1; k >= 0; k--) {
    for (let l = k; l < n; l++) {
      if (isPal[k][l] === true) {
        minPal[k] = Math.min(minPal[k], 1 + minPal[l + 1])
      }
    }
  }

  return minPal[0] - 1
}
