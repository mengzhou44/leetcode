/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let result = []
  helper('', 0, 0)

  return result

  function helper(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current)
    }

    if (close > open) return

    if (open < n) {
      helper(current + '(', open + 1, close)
    }

    if (close < n) {
      helper(current + ')', open, close + 1)
    }
  }
}
